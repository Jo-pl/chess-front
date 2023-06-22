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

  isClass1(index: number): boolean {
    return (Math.floor(index / 8) % 2 === 0 && index % 2 === 0) || (Math.floor(index / 8) % 2 === 1 && index % 2 === 1);
  }

  isClass2(index: number): boolean {
    return (Math.floor(index / 8) % 2 === 0 && index % 2 === 1) || (Math.floor(index / 8) % 2 === 1 && index % 2 === 0);
  }

}
