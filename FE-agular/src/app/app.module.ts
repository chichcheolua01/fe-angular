import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutPageComponent } from './layouts/layout-page/layout-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './page/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutPageComponent,
    HomePageComponent,
    ProductPageComponent,
    LayoutAdminComponent,
    ProductListComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
