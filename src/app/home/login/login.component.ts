import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { AuthService } from 'src/app/services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service'
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
  confirmForm:FormGroup;
  userEmail:string = '';
  formType:string = 'login';
  loading:boolean = false;
  errorMessage:string|null = null;
  errorsActivated:boolean = false;
  alertService:AlertService;

  constructor(private r: Router, private auth:AuthService, formBuilder: FormBuilder, alertService:AlertService) {
    this.alertService = alertService;
    this.router = r;
    this.authService = auth;
    this.formBuilder = formBuilder;
    this.loginRegisterForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(30)]],
    });
    this.confirmForm = this.formBuilder.group({
      code: ['',[Validators.required]]
    });
  }

  f(){
    return this.loginRegisterForm.controls;
  }

  f2(){
    return this.confirmForm.controls;
  }

  ngOnInit(): void {
  }

  handleSubmit = async()=>{
    console.log(this.loginRegisterForm);
    if (this.loginRegisterForm.invalid) {
      this.errorsActivated = true;
      return;
    }
    console.log('after handlesubmit')
    
    if(this.formType == 'login'){
      await this.signIn();
    }else if(this.formType == 'register'){
      await this.signUp();
    }else{
      if(this.confirmForm.invalid){
        this.errorsActivated = true;
        console.log('hey');
        return;
      }
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
          this.errorMessage = 'This account already exists';
          this.errorsActivated = false;
        }else{
          this.userEmail = this.loginRegisterForm.value['email'];
          this.formType='confirm';
          this.errorsActivated = false;
        }
      }
      this.loading = false;
    });
  }

  signIn = async()=>{
    this.errorMessage = '';
    let res = this.authService.signIn(this.loginRegisterForm.value['email'],this.loginRegisterForm.value['password']);
    this.loading = true;
    res.then((val)=>{
      if(val){
        if(val[1] == 'error'){
          this.errorMessage = 'Incorrect user or password, please try again';
          this.errorsActivated = false;
        }else{
          this.alertService.messageSuccess = "Signed in with success";
          this.router.navigate(['/']);
        }
      }
      this.loading = false;
    });
  }

  verifyEmailValidationCode = async()=>{
    this.errorMessage = '';
    console.log(this.userEmail,this.confirmForm.value['code']);
    let res = this.authService.verifyEmailValidationCode(this.userEmail,this.confirmForm.value['code']);
    this.loading = true;
    res.then((val)=>{
      console.log(val);
      if(val){
        if(val[1] == 'error'){
          this.errorMessage = 'This code is either incorrect or expired, please try again';
          this.errorsActivated = false;
        }else{
          this.router.navigate(['/']);
        }
      }else{
        this.router.navigate(['/']);
      }
      this.loading = false;
    });
  }
}
