import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

import {API} from '../../settings/api';
import {handleError} from '../../helpers/error.handler';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${API}/login`, {Id: username, Password: password})
      .pipe(map((user: AuthResponse) => {
          if (user && user.AuthenticateToken) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.reload(); // should use redux i.e. for updating state instead.
          }
          return user;
        }),
        catchError(handleError));
  }

  logout() {
    localStorage.removeItem('currentUser');
    window.location.reload(); // should use redux i.e. for updating state instead.
  }

  isLoggedIn() {
    const cookie: AuthResponse = JSON.parse(localStorage.getItem('currentUser'));
    return !!cookie;
  }

  getCurrentUser() {
    const cookie: AuthResponse = JSON.parse(localStorage.getItem('currentUser'));
    return cookie.Id;
  }
}
