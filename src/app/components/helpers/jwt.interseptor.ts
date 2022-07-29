import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/index";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser = JSON.parse(localStorage.getItem('access_token'));
   console.log("hello", currentUser);
    if (currentUser) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser}`
        }
      });
    }
    return next.handle(request);
  }
}
