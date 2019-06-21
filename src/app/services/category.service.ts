import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseURl=environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<any>{
    return this.httpClient.get<any>(this.baseURl+'/categories/all')
    .pipe(
      tap(
        response=>{
          return response;
        }),
        catchError(
          (err)=>{
            console.error(err);
            return of(false);
          }
        )

    )
  }
}
