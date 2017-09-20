import { CategoryPostService } from './../../../shared/services/category-post.service';
import { Component, OnInit, Input, NgModule } from '@angular/core';

@Component({
  selector: 'sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit  {
  categories$;
  orderHeader = {};
  // @Input('category') category;

  constructor(private categorypostservice: CategoryPostService) { 
    this.getCategories();
  } 

  getCategories() {
    this.categorypostservice.getAll().subscribe(data => this.categories$ = data);
  }

  // save(orderHeader) { 
  //   if (this.id) this.productService.update(this.id, product);
  //   else this.productService.create(product);
    
  //   this.router.navigate(['/admin/products']);
  // }
     ngOnInit() {
    }
}
