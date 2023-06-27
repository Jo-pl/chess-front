import { Component, Input, OnInit } from '@angular/core';
import { ChessObject } from 'src/app/model/chess-object';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() chessObject: ChessObject|null = null;
  @Input() square: String = "";
  @Input() isSelected:boolean = false;
  pieceMap = new Map([
    ['p', "pawn"],
    ['r', "rook"],
    ['b', "bishop"],
    ['n', "knight"],
    ['q', "queen"],
    ['k', "king"],
  ]);

  constructor() {
    
  }

  getClass(){
    let res = "";
    if(this.chessObject){
      res += ('fa-solid fa-2xl fa-chess-'+this.pieceMap.get(this.chessObject.type)+' ');
    }
    if(this.chessObject?.color == 'b'){
      res+='black-player ';
    }
    if(this.isSelected){
      res+='selected';
    }
    return res;
  }

  ngOnInit(): void {
    
  }

}
