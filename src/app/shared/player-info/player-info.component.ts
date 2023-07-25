import { Attribute } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  authService:AuthService;
  user:any = {}
  
  constructor(authService:AuthService) {
    this.authService = authService;
    this.user = new Object;
    this.user.email = 'Anon';
  }

  ngOnInit(): void {
    this.authService.getUser().then((x)=>{
      this.user.email = x['attributes']['email'];
    });
  }

}
