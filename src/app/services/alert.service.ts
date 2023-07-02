import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  messageSuccess:string|null = '';
  messageError:string|null = '';

  constructor() {
    
  }

  message(){
    let res = null
    if(this.messageError){
      res = this.messageError;
      this.messageError = null;
    }
    if(this.messageSuccess){
      res = this.messageSuccess;
      this.messageSuccess = null;
    }
    return res;
  }
}
