import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PostDetailPageComponent } from './pages/post-detail-page/post-detail-page.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminPostComponent } from './pages/admin/admin-post/admin-post.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { PostAddComponent } from './pages/post-add/post-add.component';
import { PostEditComponent } from './pages/post-edit/post-edit.component';
import { PostListComponent } from './components/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    PostDetailPageComponent,
    DashboardComponent,
    AdminPostComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    PostAddComponent,
    PostEditComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
