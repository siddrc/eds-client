import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'members-members-home-list',
  templateUrl: './members-home.component.html',
  styleUrls: ['./members-home.component.css']
})
export class MembersHomeComponent implements OnInit {
 constructor(private router: Router) {}
  
  ngOnInit() {
  	this.router.navigate(["/members/list"])
  }
   doLogout(){
  	localStorage.setItem('eds-token',undefined)
  	this.router.navigate(['/login'])
  }
  

}

