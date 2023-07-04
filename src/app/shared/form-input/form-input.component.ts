import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input() placeholder!: string;
  @Input() icon!: string;
  @Input() form!: FormGroup;
  @Input() error!: boolean;
  constructor() {
  }

  ngOnInit(): void { 
  }

}
