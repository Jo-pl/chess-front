import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async signUp(email:any,password:any) {
    let res;
    await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email:email,          // optional
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
      console.log(res);
      return res;
  }

  async signIn(email:any,password:any) {
    console.log('in signin')
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
    console.log(res);
    return res;
  }

  async verifyEmailValidationCode(email:string,code:string) {
    let res;
    Auth.confirmSignUp(email,code)
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
