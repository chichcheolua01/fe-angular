import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostDetailPageComponent } from './pages/post-detail-page/post-detail-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminPostPageComponent } from './pages/admin/admin-post-page/admin-post-page.component';
import { AdminCreatePostPageComponent } from './pages/admin/admin-create-post-page/admin-create-post-page.component';
import { AdminUpdatePostPageComponent } from './pages/admin/admin-update-post-page/admin-update-post-page.component';
import { AdminUserPageComponent } from './pages/admin/admin-user-page/admin-user-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'posts',
        component: PostsPageComponent,
      },
      {
        path: 'posts/:id',
        component: PostDetailPageComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'posts',
        component: AdminPostPageComponent,
        children: [
          {
            path: 'add',
            component: AdminCreatePostPageComponent,
          },
          {
            path: ':id/update',
            component: AdminUpdatePostPageComponent,
          },
        ],
      },
      {
        path: 'users',
        component: AdminUserPageComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
