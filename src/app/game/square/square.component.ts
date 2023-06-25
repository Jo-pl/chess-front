import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() chessObject: any = null;
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

  ngOnInit(): void {
    
  }

}
