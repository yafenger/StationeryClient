import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private employeeUrl = 'http://localhost:8080/api/test/employee';
  private managerUrl = 'http://localhost:8080/api/test/manager';
  private ownerUrl = 'http://localhost:8080/api/test/owner';
  private adminUrl = 'http://localhost:8080/api/test/admin';


  constructor(private http: HttpClient) { }
 
  getUserBoard(): Observable<string> {
    return this.http.get(this.employeeUrl, { responseType: 'text' });
  }
 
  getPMBoard(): Observable<string> {
    return this.http.get(this.managerUrl, { responseType: 'text' });
  }
 
  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }

}


