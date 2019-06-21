import { Component } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[];
  private authority: string;
 
  constructor(private tokenStorage: TokenStorageService) { }
 
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'Shopowner') {
          this.authority = 'Shopowner';
          return false;
        } else if (role === 'Manager') {
          this.authority = 'Manager';
          return false;
        }else if (role === 'Admin') {
          this.authority = 'Admin';
          return false;
        }
        this.authority = 'Employee';
        return true;
      });
    }
  }
}
