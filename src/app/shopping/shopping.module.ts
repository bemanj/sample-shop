import { ProductListComponent } from './../admin/components/product-list/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';

import { SharedModule } from './../shared/shared.module';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { SalesOrderNewComponent } from './components/sales-order-new/sales-order-new.component';
import { SalesOrderComponent } from './components/sales-order/sales-order.component';
import { SalesReportComponent } from './components/sales-report/sales-report.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PrintFormComponent } from './components/print-form/print-form.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
      { path: 'sales-report', component: SalesReportComponent, canActivate: [AuthGuard] },
      { path: 'sales-order', component: SalesOrderComponent, canActivate: [AuthGuard] },
      { path: 'sales-order-new', component: SalesOrderComponent, canActivate: [AuthGuard] },
      { path: 'print-form/:id', component: PrintFormComponent, canActivate: [AuthGuard] },
    ])
  ],
  declarations: [
    ProductsComponent,
    SalesReportComponent,
    SalesOrderComponent,
    SalesOrderNewComponent,
    ShoppingCartComponent,
    PrintFormComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    PrintFormComponent
  ]
})
export class ShoppingModule { }
