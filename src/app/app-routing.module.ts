import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './components/user/user.component';
import { ServiceComponent } from './components/service/service.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthComponentComponent } from './components/auth-component/auth-component.component';
import { AuthGaurd } from './service/AuthGaurd';
import { userRoleGuard } from './service/userRole';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

 {
  path:'login',
  component:LoginComponent,

},
{path:'home',
  component:HomeComponent,
  canActivate:[AuthGaurd]

},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

   {
    path:'Feedback',
    component:ContactComponent,
   
  },

  {
    path:'About',
    component:AboutComponent
  },
   {
    path:'About/add',
    component:AboutComponent
  },
    {
    path:'About/edit/:id',
    component:AboutComponent
  },
    {
    path:'About/:id',
    component:AboutComponent
  },
  {
    path:'Menu',
    component:MenuComponent
  },
   {
    path:'Menu/add',
    component:AboutComponent
  },
  {
    path:'Menu/:id',
    component:AboutComponent
  },
   {
    path:'Menu/add',
    component:MenuComponent
  },
  {
    path:'Menu/edit/:id',
    component:MenuComponent
  },
  {
    path:'Cart',
    component:CartComponent
  },
   {
    path:'Feedback/add',
    component:ContactComponent
  },
   {
    path:'Feedback/:id',
    component:ContactComponent
  },
  {
    path:'Feedback/edit/id',
    component:ContactComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
