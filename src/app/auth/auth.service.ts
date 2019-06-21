import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
 
import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import {environment} from '../../environments/environment';
import {TokenStorageService} from './token-storage.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURl=environment.apiUrl;
 
  constructor(private http: HttpClient,
    private tokenStorage: TokenStorageService) {
  }

  signIn(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.baseURl+"/auth/signin", credentials, httpOptions)
               .pipe(
                 tap((data)=>{
                   //save user info
                   this.tokenStorage.saveUsername(data.username);
                   this.tokenStorage.saveToken(data.accessToken);
                   this.tokenStorage.saveAuthorities(data.authorities);
                 })
               )
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.baseURl+"/auth/signup", info, httpOptions);
  }

  hasLogin():boolean{
    const token = this.tokenStorage.getToken();
    return token && token.length>0;  
  }

  hasRole(role:string):boolean{
    const roles=this.tokenStorage.getAuthorities();
    const result=roles.indexOf(role)!=-1;
    return result;
  }

}
