import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request);
    const currentUser: AuthResponse = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.AuthenticateToken) {
      request = request.clone({
        setHeaders: {
          'X-Authenticate-Token': currentUser.AuthenticateToken
        }
      });
    } else {
      request = request.clone({
        setHeaders: {
          'X-Authenticate-Token': 'none'
        }
      });
    }

    return next.handle(request);
  }
}
