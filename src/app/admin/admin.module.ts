import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { AdminCustomerComponent } from './components/admin-customer/admin-customer.component';
import { AdminProductComponent } from './components/admin-product/admin-product.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'admin/products/new',
        component: ProductFormComponent
      },
      {
        path: 'admin/products/:id',
        component: ProductFormComponent,
      },
      {
        path: 'admin/products',
        component: AdminProductComponent,
      },
      {
        path: 'admin/customers',
        component: AdminCustomerComponent,
      },
      {
        path: 'admin/customers/new',
        component: CustomerFormComponent,
      }
      // ,{
      //   path: 'admin/product-list',
      //   component: ProductListComponent,
      //   canActivate: [AuthGuard, AdminAuthGuard]
      // },

      // {
      //   path: 'admin/orders',
      //   component: AdminOrdersComponent,
      //   canActivate: [AuthGuard, AdminAuthGuard]
      // }
    ])
  ],
  declarations: [
    ProductFormComponent,
    // ProductListComponent,
    AdminProductComponent,
    CustomerListComponent,
    CustomerFormComponent,
    AdminCustomerComponent,
    // AdminOrdersComponent,
    // ProductListComponent,
  ]
})
export class AdminModule { }
