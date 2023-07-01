import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { AuthService } from 'src/app/services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  router:Router;
  authService:AuthService;
  formBuilder:FormBuilder;
  loginRegisterForm:FormGroup;
  userEmail:string = '';
  formType:string = 'login';
  loading:boolean = false;
  errorMessage:string|null = null;
  errorsActivated:boolean = false;

  constructor(private r: Router, private auth:AuthService, formBuilder: FormBuilder,) {
    this.router = r;
    this.authService = auth;
    this.formBuilder = formBuilder;
    this.loginRegisterForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(30)]],
      code: ['',[Validators.required]]
    });
  }

  f(){
    return this.loginRegisterForm.controls;
  }

  ngOnInit(): void {
    
  }

  handleSubmit = async()=>{
    if (this.loginRegisterForm.invalid) {
      this.errorsActivated = true;
      return;
    }
    
    if(this.formType == 'login'){
      await this.signIn();
    }else if(this.formType == 'register'){
      await this.signUp();
      this.formType='confirm';
    }else{
      await this.verifyEmailValidationCode();
    }
  }

  signUp = async()=>{
    this.errorMessage = '';
    let res = this.authService.signUp(this.loginRegisterForm.value['email'],this.loginRegisterForm.value['password']);
    this.loading = true;
    res.then((val)=>{
      if(val){
        if(val[1] == 'error'){
          this.errorMessage = 'This code is either incorrect or expired, please try again';
        }
      }
      this.loading = false;
    });
    this.userEmail = this.loginRegisterForm.value['email'];
  }

  signIn = async()=>{
    this.errorMessage = '';
    let res = this.authService.signIn(this.loginRegisterForm.value['email'],this.loginRegisterForm.value['password']);
    this.loading = true;
    res.then((val)=>{
      if(val){
        if(val[1] == 'error'){
          this.errorMessage = 'Incorrect user or password, please try again';
        }
      }
      this.loading = false;
      //this.router.navigate(['/']);
    });
  }

  verifyEmailValidationCode = async()=>{
    this.errorMessage = '';
    let res = this.authService.verifyEmailValidationCode(this.userEmail,this.loginRegisterForm.value['code']);
    this.loading = true;
    res.then((val)=>{
      if(val){
        if(val[1] == 'error'){
          this.errorMessage = 'This code is either incorrect or expired, please try again';
        }
      }
      this.loading = false;
    });
  }
}
