import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Order } from './components/order/order';
import { NotFound } from './components/not-found/not-found';
import { Reviews } from './components/reviews/reviews';
import { Info } from './components/info/info';
import { AppLayout } from './components/app-layout/app-layout';
import { Details } from './components/details/details';
import { authGuard } from './guards/auth-guard';
import { AddProduct } from './components/add-product/add-product';

export const routes: Routes = [ //first match wins

  {
    path: '',
    component: AppLayout,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' }, //   /  >> /home
      { path: 'home', component: Home, title: 'Home page' },
      { path: 'add-product', component: AddProduct, title: 'Add product page' },
      { path: 'order', component: Order, title: 'Order page', canActivate: [authGuard] },
      {
        path: 'about-us',
        // component: AboutUs,
        loadComponent: () => import('./components/about-us/about-us').then((c) => c.AboutUs),
        title: 'About Page',
        children: [
          { path: '', redirectTo: '/about-us/reviews', pathMatch: 'full' },
          { path: 'reviews', component: Reviews },
          { path: 'info', component: Info }
        ]
      },
      { path: 'details/:id', component: Details }
    ]
  }
  ,
  { path: 'login', component: Login, title: 'Login page' },

  { path: '**', component: NotFound } //wildcard route
];
