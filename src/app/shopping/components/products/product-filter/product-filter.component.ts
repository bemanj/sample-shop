import { CategoryService } from '../../../../shared/services/category.service';
// import { CategoryPostService } from '../../../../shared/services/category-post.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$;
  @Input('category') category;

  constructor(categoryService: CategoryService) {
  // constructor(categoryService: CategoryPostService) {
    this.categories$ = categoryService.getAll();
    // .map(res => res.json())
    // .subscribe(name => this.categories$ = name);
  }

  ngOnInit() {
  }

}
