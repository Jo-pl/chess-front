import { Component, OnInit } from '@angular/core';
import { Chess } from 'chess.js'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  selectedSquare:Number | undefined;
  chess = new Chess();

  constructor() { }

  ngOnInit(): void {

  }

  isColored(index: number): boolean {
    return (Math.floor(index / 8) % 2 === 0 && index % 2 === 0) || (Math.floor(index / 8) % 2 === 1 && index % 2 === 1);
  }

  SelectSquare(index:Number){
    console.log(this.chess.board());
    this.selectedSquare = index;
    console.log(index);
  }
  
}
