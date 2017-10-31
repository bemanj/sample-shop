import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductSelectionComponent } from '../shopping/components/product-selection/product-selection.component';
import { SharedModule } from './../shared/shared.module';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { InventoryStocksComponent } from './components/inventory-stocks/inventory-stocks.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { ParentDialogComponent } from './components/parent-dialog/parent-dialog.component';
import { PrintFormComponent } from './components/print-form/print-form.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { SalesOrderNewComponent } from './components/sales-order/sales-order-new/sales-order-new.component';
import { SalesOrderComponent } from './components/sales-order/sales-order.component';
import { SalesReportComponent } from './components/sales-order/sales-report/sales-report.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';

// import { ProductListComponent } from './../admin/components/product-list/product-list/product-list.component';
// import { CheckOutComponent } from './components/check-out/check-out.component';
// import { OrderSuccessComponent } from './components/order-success/order-success.component';
// import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
// import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      // { path: 'shopping-cart', component: ShoppingCartComponent },
      // { path: 'check-out', component: CheckOutComponent,  },
      // { path: 'order-success/:id', component: OrderSuccessComponent,  },
      { path: 'sales-report', component: SalesReportComponent,  },
      // { path: 'sales-order', component: SalesOrderComponent,  },
      { path: 'sales-order/:id', component: SalesOrderComponent,  },
      { path: 'sales-order-new', component: SalesOrderComponent,  },
      { path: 'print-form/:id', component: PrintFormComponent,  },
      { path: 'inventory-stocks/new', component: InventoryStocksComponent,  },
      { path: 'inventory-stocks/:id', component: InventoryStocksComponent,  },
      { path: 'inventory-list', component: InventoryListComponent,  },
      { path: 'order-detail', component: OrderDetailComponent,  },
      { path: 'product-selection', component: ProductSelectionComponent,  },
      { path: 'parent-dialog', component: ParentDialogComponent,  },
    ])
  ],
  declarations: [
    ProductsComponent,
    SalesReportComponent,
    SalesOrderComponent,
    SalesOrderNewComponent,
    // ShoppingCartComponent,
    PrintFormComponent,
    // CheckOutComponent,
    // OrderSuccessComponent,
    ProductFilterComponent,
    // ShoppingCartSummaryComponent,
    ShippingFormComponent,
    PrintFormComponent,
    InventoryStocksComponent,
    InventoryListComponent,
    ProductSelectionComponent,
    OrderDetailComponent,
    ParentDialogComponent
  ]
})
export class ShoppingModule { }
