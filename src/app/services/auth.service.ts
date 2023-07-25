import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  cognitoUser:CognitoUser|null;
  
  constructor() {this.cognitoUser = null; }

  async getUser(){
    let user = await Auth.currentAuthenticatedUser()
    return user;
  }

  async signUp(email:any,password:any) {
    let res;
    await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email:email, // optional
        },
        autoSignIn: { // optional - enables auto sign in after user is confirmed
          enabled: true,
        }
      })
      .then(response => res = [
        response,
        'success'
      ])
      .catch(error => res = [
        error,
        'error'
      ]);
      return res;
  }

  async signIn(email:any,password:any) {
    let res;
    await Auth.signIn(email, password)
    .then(response => res = [
      response,
      'success'
    ])
    .catch(error => res = [
      error,
      'error'
    ]);
    return res;
  }

  async verifyEmailValidationCode(email:string,code:string) {
    let res;
    await Auth.confirmSignUp(email,code)
    .then(response => res = [
      response,
      'success'
    ])
    .catch(error => res = [
      error,
      'error'
    ]);
    return res;
  }

}
