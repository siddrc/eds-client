import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {AppconstantsService} from './appconstants.service'
import { catchError, map, tap } from 'rxjs/operators';
import { Observable,of } from 'rxjs'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient,private appconstantsService:AppconstantsService,private router:Router) {


  }
  login(loginParameters:{userName:string,password:string}){
  	return this.httpClient.post(this.appconstantsService.getUserLoginServiceURL(),loginParameters).pipe(
      catchError(this.handleError('login', []))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); 
    return of(result as T);
  };
}

}
