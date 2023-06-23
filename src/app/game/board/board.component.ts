import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: string[] = [];
  selectedSquare:Number | undefined;
  constructor() { }

  ngOnInit(): void {
    //Initalize board state
    this.board = this.board.concat(["rook","knight","bishop","queen","king","bishop","knight","rook"]);
    for(let i=0;i<8;i++){
      this.board.push("pawn");
    }
    for(let i=0;i<8*4;i++){
      this.board.push("null");
    }
    for(let i=0;i<8;i++){
      this.board.push("pawn");
    }
    this.board = this.board.concat(["rook","knight","bishop","king","queen","bishop","knight","rook"]);    
  }

  isColored(index: number): boolean {
    return (Math.floor(index / 8) % 2 === 0 && index % 2 === 0) || (Math.floor(index / 8) % 2 === 1 && index % 2 === 1);
  }

  SelectSquare(index:Number){
      this.selectedSquare = index;
      console.log(index);
  }

}
