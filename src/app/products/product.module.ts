import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ReplacePipe } from '../shared/replace.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ReplacePipe
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
