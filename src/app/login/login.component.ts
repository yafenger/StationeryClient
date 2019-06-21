import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
 
  constructor(private authService: AuthService,
     private tokenStorage: TokenStorageService,
     private router: Router) { }
 
  
  ngOnInit() {
    //If user has logged in before
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }
 
  onSubmit() {

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);
 
    this.authService.signIn(this.loginInfo).subscribe(
      data => {
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        //navigate according to different role
        if(this.authService.hasRole('ROLE_ADMIN')){
          this.router.navigate(['./admin']);
        }else if(this.authService.hasRole('ROLE_MANAGER')){
          this.router.navigate(['./manager']);
        }else if(this.authService.hasRole('ROLE_SHOPOWNER')){
          this.router.navigate(['./shopowner']);
        }else{
          this.router.navigate(['./employee']);
        }
        
      },
      error => {
        console.log(error);
        this.errorMessage = "Something wrong with server";
        this.isLoginFailed = true;
      }
    );
  }

}
