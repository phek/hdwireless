import {throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

export function handleError(error: HttpErrorResponse) {

  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }

  // return an observable with a user-facing error message
  return throwError('Something bad happened; please try again later.');
}
