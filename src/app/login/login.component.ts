import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup = new FormGroup({
    userEmailFormControl: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    userPasswordFormControl: new FormControl('', [
      Validators.required
    ])
  });
  constructor(private userService: UserService,private router: Router,public snackBar: MatSnackBar) {}
  loginComponentErrorStateMatcher = new LoginComponentErrorStateMatcher();
  ngOnInit() {}
  loginOnSubmit() {
    this.snackBar.open(`Please wait...`,"Dismiss",{duration:3500})
    const loginParameters = {
      userName: this.loginFormGroup.get('userEmailFormControl').value,
      password: this.loginFormGroup.get('userPasswordFormControl').value
    }
    this.userService.login(loginParameters).subscribe((loginResponse: any) => {
      if (loginResponse && loginResponse.response && loginResponse.response.isUserAuthentic && loginResponse.response.token) {
         localStorage.setItem('eds-token',loginResponse.response.token)
         this.router.navigate(['/members'])
      }else{
         this.snackBar.open(`Invalid email/password combination`,"Dismiss",{duration:3500})
      }
    })
  }
  get userEmailFormControl(): any { return this.loginFormGroup.get('userEmailFormControl'); }
  get userPasswordFormControl(): any { return this.loginFormGroup.get('userPasswordFormControl'); }

}
class LoginComponentErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
