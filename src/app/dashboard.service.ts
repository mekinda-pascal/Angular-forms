import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor(
    private http: HttpClient,
    private router: Router,
    ) { }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
      alert('Une erreur est survenue, veuillez relancer l\'opération')
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      alert("2: Erreur lors du chargement des données");
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  // public TestGuard(): boolean{

  //   if (localStorage.getItem('login') == 'admin' && localStorage.getItem('password') == 'admin123' ) {
  //     return true;
  //   } else {
  //     this.router.navigate(['login'])
  //     return false;
  //   }

  // }


  public TestGuard(): boolean{

    if (localStorage.getItem('lastName') == 'jean' && localStorage.getItem('firstName') == 'marc' ) {
      return true;
    } else {
      this.router.navigate(['/login'])
      return false;
    }

  }


  public getAllArticle()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
