import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AppconstantsService } from '../../appconstants.service'
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable,of } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MembersService {
  httpOptions
  constructor(private httpClient: HttpClient, private appconstantsService: AppconstantsService, private router: Router) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', "x-access-token": localStorage.getItem('eds-token') })
    };
  }
  getStudents() {
    return this.httpClient.get(this.appconstantsService.getStudentsServiceURL(), this.httpOptions).pipe(
      catchError(this.handleError('getStudents', []))
    );
  }
  getStudentsDetails(){
    return this.httpClient.get(this.appconstantsService.getStudentsDetailsURL(), this.httpOptions).pipe(
      catchError(this.handleError('getStudentsDetails', []))
    );
  }
  getStudentsTests(){
     return this.httpClient.get(this.appconstantsService.getStudentsTestsURL(), this.httpOptions).pipe(
      catchError(this.handleError('getStudentsTestsURL', []))
    );
  }
  private handleError < T > (operation = 'operation', result ? : T) {
    return (error: any): Observable <T> => {
      console.error(error);
      //this.router.navigate(['/login'])
      return of(result as T);
    };
  }
}
