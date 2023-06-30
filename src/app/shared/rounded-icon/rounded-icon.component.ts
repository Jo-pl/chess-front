import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rounded-icon',
  templateUrl: './rounded-icon.component.html',
  styleUrls: ['./rounded-icon.component.css']
})
export class RoundedIconComponent implements OnInit {

  @Input() icon!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
