


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  latitud: number;
  longitud: number;
  zoom: number;

  constructor() { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;
      this.zoom = 10;
    });
  }

}
