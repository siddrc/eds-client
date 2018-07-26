import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppconstantsService {
  protocol = `http`
  IP =  "54.86.169.121"
  port = 8081	
  mainUrl = `${this.protocol}://${this.IP}:${this.port}`
  constructor() { }
  getUserLoginServiceURL(){
  	return `${this.mainUrl}/api/auth/user/login`
  }
  getStudentsServiceURL(){
  	return `${this.mainUrl}/api/app/members/students`
  }
  getStudentsDetailsURL(){
    return `${this.mainUrl}/api/app/members/students/details`
  }
  getStudentsTestsURL(){
    return `${this.mainUrl}/api/app/members/students/tests`
  }
}
