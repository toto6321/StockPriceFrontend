import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from "rxjs";
import {Stock} from "./stock";

import {catchError} from "rxjs/operators";
import {log} from "ng-zorro-antd/core/logger";



const httpOptions = {
  headers: new HttpHeaders({'content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class StockService {

  private serviceUrl = 'localhost:8090';

  constructor(private http: HttpClient
  ) { }

  getOneStock(id: number): Observable<Stock> {
    const params = new HttpParams({
      fromString: 'id=' + id
    });
    const findhttpOptions = {
      headers: new HttpHeaders({'content-Type': 'application/json'}),
      params: params
    };
    return this.http.get<Stock>(this.serviceUrl + '/stockmarket', findhttpOptions)
      .pipe(catchError(this.handleError<Stock>('getOneStock id' + id)));
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
