import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input-error';
import { AppError } from '../common/app-error';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private urlAPI ='https://jsonplaceholder.typicode.com/posts';
  private urlAPI ='//localhost/api/8000/posts';
  // constructor(urlAPI : any,private http: HttpClient) 
  constructor(@Inject(String) private url: string, private http: HttpClient) {}


  getAll(): Observable<any> {
    return this.http.get(this.urlAPI)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }  
  
  getById(): Observable<any> {
    return this.http.get(this.urlAPI)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  create(resource: any): Observable<any> {
    return this.http.post(this.urlAPI, resource)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      return throwError(new NotFoundError(error.message));
    } else if (error.status === 400) {
      return throwError(new BadInput(error.message));
    }
    return throwError(new AppError(error.message));
  }
}
