import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import {EmployeeComponent} from './employee/employee.component';


import { httpInterceptorProviders } from './auth/auth-interceptor';
import { HeaderComponent } from './shared/header/header.component';
import { ShopownerComponent } from './shopowner/shopowner.component';
import { ManagerComponent } from './manager/manager.component';

//Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmEqualValidatorDirective } from './shared/directive/confirm-equal-validator.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    HeaderComponent,
    EmployeeComponent,
    ShopownerComponent,
    ManagerComponent,
    SidebarComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2CarouselamosModule,
    //material
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
