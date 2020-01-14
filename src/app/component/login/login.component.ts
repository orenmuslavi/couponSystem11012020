import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import 'rxjs';
import { resultLogin } from 'src/app/models/resultLogin';


function hello() {
  alert('Hello!!!');
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'CouponSite';
  email: String;
  password: String;
  usertype: String;
  userChoose: String;
  registerForm: FormGroup;
  submitted = false;
  private _urlLoginCompany = "http://localhost:8080/company/login"
  loginAuthentication: boolean = false;
  login = [{}];
  res: any;

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      //optional--- firstName: ['', Validators.required],
      //optional--- lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]

    });
  }

  onSubmit() {
    this.submitted = true;
    hello();
    if (this.registerForm.invalid) {
      return;
    }
    else {
      this.http.post(this._urlLoginCompany, {
        "email": this.email,
        "password": this.password
      }).subscribe(        (val: resultLogin) => {
          console.log("POST call successful value returned in body",
            val.id);
            if (this.userChoose == "company") {
              //debug mode only 
          
              console.log(this.login);
              }
              else {
                this.navigateTo();
              }
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
    }


    // stop the process here if form is invalid


   

  }

  navigateTo() {
    this.router.navigateByUrl('/' + this.userChoose);
  }

  notify() {
    // alert(this.email)
  }

}
