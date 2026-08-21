import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './components/user/user.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'

  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'service',
    component:ServiceComponent
  },
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
