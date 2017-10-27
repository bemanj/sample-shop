import { OrderDetailService } from './services/order-detail.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-4-data-table/dist';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { CustomFormsModule } from 'ng2-validation';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryPostService } from './services/category-post.service';
import { CategoryService } from './services/category.service';
import { InventoryListService } from './services/inventory-list.service';
import { OrderService } from './services/order.service';
import { PrintService } from './services/print.service';
import { ProductListService } from './services/product-list.service';
import { ProductService } from './services/product.service';
import { SalesReportService } from './services/sales-service/sales-report.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';

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
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
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
    UserService,
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
