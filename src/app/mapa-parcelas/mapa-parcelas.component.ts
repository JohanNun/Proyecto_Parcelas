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

  parcelitas: parcela[];
  parcelas: any[];

  constructor(private parcelasService: ParcelasService,
    private activatedRoute: ActivatedRoute) {
    this.parcelas = [];
  }

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition(position => {

      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;
      this.zoom = 10;

    });



    this.parcelasService.getAll()
      .then(result => {
        this.parcelitas = result
        console.log(this.parcelitas);


        const positionParcelas = new Array();

        for (let parcela of this.parcelitas) {

          var geocoder = new google.maps.Geocoder();
          geocoder.geocode({ address: parcela.localizacion }, function (result, status) {

            if (status === google.maps.GeocoderStatus.OK) {
              let position = result[0].geometry.location;
              positionParcelas.push({ latitud: position.lat(), longitud: position.lng() });

            }

          });
        }

        this.parcelas = positionParcelas;
        console.log(this.parcelas);




      })
      .catch(error => console.log(error))

  }

}
