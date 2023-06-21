import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  rowCol: any[] = Array(64).fill({});
  constructor() { }

  ngOnInit(): void {
  }

}
