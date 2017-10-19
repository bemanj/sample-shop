import { ProductListService } from './../../../shared/services/product-list.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take'; 

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {}; 
  id;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private productService: ProductService,
    private productlistservice: ProductListService) {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);
  }

  // save(product) { 
  //   if (this.id) this.productService.update(this.id, product);
  //   else this.productService.create(product);
    
  //   this.router.navigate(['/admin/products']);
  // }

  save(product){
    
    console.log(product.category);

    var date = new Date();

    var sodata = {
      Category: product.category,
      ProductDescription: product.title
    }

  this.productlistservice.create(sodata).subscribe(data => {
  console.log(data);
    // this.router.navigate(['/sales-order', data.SalesOrderID]);
      });
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
