


import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  @Input() latitud: number;
  @Input() longitud: number;
  @Input() zoom: number;
  @Input() buscador: boolean = true;

  constructor() { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;
      this.zoom = 13;
    });
  }

}
