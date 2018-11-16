import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../Services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage = '';
  successMessage = '';
  constructor( public authService: AuthService,
               private router: Router,
               private fb: FormBuilder
  ) {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({

      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  tryLog() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    const test: boolean ;
    this.authService.doLogin(email , password)
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'conected';
        console.log('succes');
        this.test = true;
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      });
  }


  ngOnInit() {
  }

}
