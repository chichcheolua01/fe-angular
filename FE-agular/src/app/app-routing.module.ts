import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './layouts/layout-page/layout-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './page/add-product/add-product.component';


const routes: Routes = [
  { path:'' , component:LayoutPageComponent , children:[
    {path:'', component:HomePageComponent},
    {path:'products', component:ProductPageComponent},
  ]},

  {
    path:'admin' , component:LayoutAdminComponent, children:[
      {path:"products", component: ProductListComponent},
      {path:"products/add", component :AddProductComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
