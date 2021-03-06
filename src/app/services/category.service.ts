import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of} from 'rxjs';

import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseURl=environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<any>{
    return this.httpClient.get<any>(this.baseURl+'/category/all')
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

  getItemsByCatId(catId:number):Observable<any>{
    return this.httpClient.get<any>(this.baseURl+'/category/'+catId)
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
