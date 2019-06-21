import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import {ShopownerComponent} from './shopowner/shopowner.component';
import {ManagerComponent} from './manager/manager.component';

const routes: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'auth/login',
      component: LoginComponent
  },
  {
      path: 'signup',
      component: RegisterComponent
  },
  {
      path: 'employee',
      component: EmployeeComponent
  },
  {
      path: 'manager',
      component: ManagerComponent
  },
  {
      path: 'admin',
      component: AdminComponent
  },
  {
    path: 'shopowner',
    component: ShopownerComponent
  },
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
