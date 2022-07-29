import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {EnvService} from './env.service';
import { BehaviorSubject, Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {allModel} from '../allModels';
@Injectable({ providedIn: 'root' })
export class ServicesService {
  private url = '/api/token/';
  private refreshUrl = '/api/token/refresh/';
  private adhaarUpload = '/adhaarupload/';
  private addBokings = '/orders';
  private getBooking = '/orders';
  private currentUserSubject: BehaviorSubject<allModel>;
    public currentUser: Observable<allModel>;
  constructor(private http: HttpClient,
    private env: EnvService) {
      this.currentUserSubject = new BehaviorSubject<allModel>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
     }

    public get currentUserValue(): allModel {
      return this.currentUserSubject.value;
  }
    login(email: string, password: string): Observable<any> {
      //console.log(`${this.env.apiUrl + this.url}`);
      return this.http.post<any>(`${this.env.apiUrl + this.url}`, { email: email, password: password })
          .pipe(map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
             //localStorage.setItem('currentUser', JSON.stringify(user));
             localStorage.setItem('access_token', JSON.stringify(user.access));
              this.currentUserSubject.next(user.access);
              return user.access;
          }));
  }
  refreshToken() {
    return this.http.post<{token: string}>(this.env.apiUrl + this.refreshUrl, null)
    .pipe(
      map(result => {
        localStorage.setItem('access_token', JSON.stringify(result));
        return true;
      })
    );
  }

  logout() {
    //console.log("hello");
      // remove user from local storage and set current user to null
      localStorage.removeItem('access_token');
      this.currentUserSubject.next(null);
      return false;
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
    addupload(adhaarUploads: Object): Observable<any>{
      const token = localStorage.getItem("access_token");
    // const header = new Headers({ 'Authorization': `Bearer ${token}` });
    // const options = {
    //    headers: header,
    // };
      return this.http.post(`${this.env.apiUrl + this.adhaarUpload}`, adhaarUploads);
    }

    bookingAdd(addBoking: Object): Observable<any>{
      //const token = localStorage.getItem("access_token");
    //const header = new Headers({ 'Authorization': `Bearer ${token}` });
    // const options = {
    //    headers: header,
    // };
      return this.http.post(`${this.env.apiUrl + this.addBokings}`, addBoking);
    }


    allGetList() {
       const token = localStorage.getItem("access_token");
    const header = new Headers({ 'Authorization': `Bearer ${token}` });
    const options = {
       headers: header,
    };
      const url = `${this.env.apiUrl + this.getBooking}`;
      //console.log(this.http.get(url));
      return this.http.get(url);
    }
    
}
