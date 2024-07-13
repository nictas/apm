import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from './shared/replace.pipe';
import { StarComponent } from './shared/star.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }
