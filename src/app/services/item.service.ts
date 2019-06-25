import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseURl=environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getItems():Observable<any>{
    return this.httpClient.get<any>(this.baseURl+'/item/all')
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
