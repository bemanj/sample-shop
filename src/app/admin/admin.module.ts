import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminProductComponent } from './components/admin-product/admin-product.component';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular-4-data-table';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
      // {
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
    // AdminOrdersComponent,
    // ProductListComponent,
  ]
})
export class AdminModule { }
