import { CategoryPostService } from './../../../shared/services/category/category-post.service';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular-4-data-table';
import 'rxjs/add/operator/take';

import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../shared/services/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  p = {};
  id;
  testlabel = 'sample' ;

  constructor(private productservice: ProductService,
    private route: ActivatedRoute,
    private categoryservice: CategoryPostService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productservice.getById(this.id).subscribe(p => {
      this.p  = p;
      });
    }
  }

  save(p) {
    // alert('test save function');
      alert('Sales order will be save');

      // console.log('coy ' + p.Company);

      const newproduct = {
        CategoryID: p.category,
        ProductTitle: p.ProductTitle,
        ReorderLevel: p.ReorderLevel,
        Discontinued: p.Discontinued
      };

      const updatedproduct = {
        ProductId: this.id,
        CategoryID: p.category,
        ProductTitle: p.ProductTitle,
        ReorderLevel: p.ReorderLevel,
        Discontinued: p.Discontinued
      };

      // console.log(newproduct);
      if (this.id) {
        this.productservice.update(this.id, updatedproduct);
      } else {
        this.productservice.create(newproduct).subscribe();
      }
        // console.log('update so' + this.orderHeader.SalesOrderID)
    }

    ngOnInit() {
      this.categoryservice.getAll().subscribe(c => {
        this.categories$ = c;
      });
    }

}
