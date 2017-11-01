import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-4-data-table/dist';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { CustomFormsModule } from 'ng2-validation';

import { AuthGuard } from './services/auth/auth-guard.service';
import { AuthService } from './services/auth/auth.service';
import { CategoryPostService } from './services/category/category-post.service';
import { CategoryService } from './services/category/category.service';
import { ConfigService } from './services/config/config.service';
import { CustomerService } from './services/customer/customer.service';
import { InventoryListService } from './services/inventory/inventory-list.service';
import { OrderDetailService } from './services/order/order-detail.service';
import { OrderService } from './services/order/order.service';
import { PrintService } from './services/print/print.service';
import { ProductListService } from './services/product/product-list.service';
import { ProductService } from './services/product/product.service';
import { SalesReportService } from './services/sales-service/sales-report.service';
import { ShoppingCartService } from './services/shopping/shopping-cart.service';
import { UserService } from './services/user/user.service';

// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { ProductCardComponent } from './components/product-card/product-card.component';
// import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
    HttpModule,
    DateTimePickerModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    // ProductCardComponent,
    // ProductQuantityComponent,
  ],
  exports: [
    // ProductCardComponent,
    // ProductQuantityComponent,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    HttpModule,
    DateTimePickerModule,
    BrowserModule,
    BrowserAnimationsModule,
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
    NgbModule.forRoot().ngModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    ConfigService,
    UserService,
    CustomerService,
    CategoryService,
    CategoryPostService,
    PrintService,
    SalesReportService,
    OrderDetailService,
    ProductService,
    ProductListService,
    ShoppingCartService,
    OrderService,
    InventoryListService
  ]
})
export class SharedModule { }
