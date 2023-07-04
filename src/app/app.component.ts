import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chess-front';
  router:Router;
  alertService:AlertService;

  constructor(private r: Router, alertService: AlertService){
    this.router = r;
    this.alertService = alertService;
  }
}
