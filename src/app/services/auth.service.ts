import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async signUp(email:any,password:any) {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email:email,          // optional
        },
        autoSignIn: { // optional - enables auto sign in after user is confirmed
          enabled: true,
        }
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  async signIn(email:any,password:any) {
    try {
      const user = await Auth.signIn(email, password);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  async verifyEmailValidationCode(email:string,code:string) {
    Auth.confirmSignUp(email,code)
      .then(() => {
        console.log('email verified');
    })
      .catch((e) => {
        console.log('failed with error', e);
    });
  }

}
