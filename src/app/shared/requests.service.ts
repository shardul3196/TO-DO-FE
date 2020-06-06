import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonDataPipeService } from './common-data-pipe.service';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private commonData: CommonDataPipeService
  ) { }

  getData(url: string): Observable<any> {
    this.commonData.setIsUIBlocked(true);
    return this.http.get(url).pipe(
      map(res => {
        this.commonData.setIsUIBlocked(false);
        return res;
      }, error => {
        this.commonData.setIsUIBlocked(false);
      }),
      catchError((err) => this.handleError(err))
    );
  }

  postData(url: string, body?: any): Observable<any> {
    this.commonData.setIsUIBlocked(true);
    if (body === undefined) {
      body = {};
    }
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    const options = { headers };

    return this.http.post(url, body, options).pipe(
      map(res => {
        this.commonData.setIsUIBlocked(false);
        return res;
      },
        error => {
          this.commonData.setIsUIBlocked(false);
        }),
      catchError((err) => this.handleError(err))
    );
  }

  deleteData(url: string): Observable<any> {
    this.commonData.setIsUIBlocked(true);

    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    const options = { headers };

    return this.http.delete(url, options).pipe(
      map(res => {
        this.commonData.setIsUIBlocked(false);
        return res;
      },
        error => {
          this.commonData.setIsUIBlocked(false);
        }),
      catchError((err) => this.handleError(err))
    );
  }


  handleError(error: HttpErrorResponse) {
    this.commonData.setIsUIBlocked(false);
    if (error.status === 401 || error.status === 405) {
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }
    return throwError(error);
  }

}

