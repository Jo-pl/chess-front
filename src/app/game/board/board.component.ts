import { Component, OnInit } from '@angular/core';
import { Chess } from 'chess.js'
import { ChessObject } from 'src/app/chess-object';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  selectedSquare: string|undefined;
  rowAss:string[] = ['a','b','c','d','e','f','g','h'];
  colAss:number[] = [1,2,3,4,5,6,7,8];

  chess = new Chess();

  constructor() { }

  ngOnInit(): void {
    console.log(this.chess.board());
  }

  isColored(index: number): boolean {
    return (Math.floor(index / 8) % 2 === 0 && index % 2 === 0) || (Math.floor(index / 8) % 2 === 1 && index % 2 === 1);
  }

  selectSquare(sq:string){
    let found = false;
    this.chess.board().forEach(col => {
      col.forEach(row=>{
        if(row?.square == sq){
          found = true;
        }
      });
    });
    console.log(this.selectedSquare);
    if(this.selectedSquare == null && !found){return;};
    if(this.selectedSquare == null){this.selectedSquare = sq;return;};
    //A square has already been selected
    //Try a move 
    try{
    let res = this.chess.move(this.selectedSquare+sq);
    this.selectedSquare = undefined;
    }catch(ex){
      console.log(ex);
      this.selectedSquare = undefined;
    }
  }

}
