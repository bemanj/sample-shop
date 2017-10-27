import { SalesOrder } from './../../../shared/models/sales-order';
import { SalesReportService } from './../../../shared/services/sales-service/sales-report.service';
import { Router } from '@angular/router';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { AppUser } from '../../../shared/models/app-user';
import { AuthService } from '../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(private auth: AuthService,
    private router: Router,
    private salesreportservice: SalesReportService,
    private shoppingCartService: ShoppingCartService) {
  }

  async ngOnInit() {
    // this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    // this.cart$ = await this.shoppingCartService.getCart();
  }


  save() {

    const date = new Date();

    const sodata = {
      OrderDate: date,
      Customer: '',
      SubTotal: 0, // orderHeader.soSubTotal,
      TaxAmt: 0, // orderHeader.soTaxAmt,
      Freight: 0, // orderHeader.soFreight,
      Comment: 'test', // orderHeader.soComment,
      ModifiedDate: date
    };

  this.salesreportservice.create(sodata).subscribe(data => {
    this.router.navigate(['/sales-order', data.SalesOrderID]);
      });
  }

  logout() {
    // this.auth.logout();
  }

}
