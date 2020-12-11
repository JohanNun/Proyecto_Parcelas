import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { parcela, ParcelasService } from '../services/parcelas.service';

@Component({
  selector: 'app-mapa-parcelas',
  templateUrl: './mapa-parcelas.component.html',
  styleUrls: ['./mapa-parcelas.component.css']
})
export class MapaParcelasComponent implements OnInit {

  @Input() latitud: number;
  @Input() longitud: number;
  @Input() zoom: number;
  @Input() buscador: boolean = true;

  @Input() parcelas: any[];

  constructor(private parcelasService: ParcelasService,
    private activatedRoute: ActivatedRoute) {
    this.parcelas = [];
  }

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition(position => {

      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;
      this.zoom = 6;

    });


  }


}
