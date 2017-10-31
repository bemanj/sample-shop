import { ProductService } from './../../../shared/services/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  id;

  constructor(private productservice: ProductService) { }

  save(p) {
    // alert('test save function');
      alert('Sales order will be save');

      // console.log('coy ' + p.Company);

      const date = new Date();

      const newproduct = {
        CategoryID: 1,
        ProductTitle: p.title,
        ReorderLevel: p.reorderlevel,
        Discontinued: p.discontinued
      };

      // console.log(newproduct);
      this.productservice.create(newproduct)
      .subscribe();
        // console.log('update so' + this.orderHeader.SalesOrderID)
    }

  ngOnInit() {
  }

}
