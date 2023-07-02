import { CUSTOM_ELEMENTS_SCHEMA, Component, NgModule, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-chess-viewer',
  templateUrl: './chess-viewer.component.html',
  styleUrls: ['./chess-viewer.component.css'],
})

export class ChessViewerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(){
    let model = $('#orbit-demo');
    let value = model.prop('cameraOrbit');
    //console.log(model);
    console.log(value); 
    const orbitCycle = [
      '45deg 55deg 5m',
      '-60deg 110deg 5m',
      model.prop('cameraOrbit')
    ];
    setInterval(() => {
      const currentOrbitIndex = orbitCycle.indexOf(model.prop('cameraOrbit'));
      model.prop('cameraOrbit',orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length])
    }, 6000);
  }

}

