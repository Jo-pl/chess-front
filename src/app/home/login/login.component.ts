import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  router:Router;
  authService:AuthService;
  formBuilder:FormBuilder;
  loginRegisterForm:any;
  userEmail:string='';

  constructor(private r: Router, private auth:AuthService, formBuilder: FormBuilder,) {
    this.router = r;
    this.authService = auth;
    this.formBuilder = formBuilder;
    this.loginRegisterForm = this.formBuilder.group({
      email: '',
      password: '',
      code:''
    });
  }

  ngOnInit(): void {
    
  }

  signUp = async()=>{
    console.log(this.loginRegisterForm.value['email']);
    this.authService.signUp(this.loginRegisterForm.value['email'],this.loginRegisterForm.value['password']);
    this.userEmail = this.loginRegisterForm.value['email'];
  }

  signIn = async()=>{
    this.authService.signIn(this.loginRegisterForm.value['email'],this.loginRegisterForm.value['password']);
  }

  verifyEmailValidationCode = async()=>{
    this.authService.verifyEmailValidationCode(this.userEmail,this.loginRegisterForm.value['code']);
  }

}
