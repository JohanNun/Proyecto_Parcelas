import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HuertComService } from '../services/huert-com.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  huertosLocalizacion: any[];

  @Input() latitud: number;
  @Input() longitud: number;
  @Input() zoom: number;
  @Input() buscador: boolean = true;

  constructor(private huertComService: HuertComService,
    private activatedRoute: ActivatedRoute) {
    this.huertosLocalizacion = [];
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {

      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;

    });

    /* Consulta bd y traer todos los huertos */


    let id = "";
    id = this.activatedRoute.snapshot.params['huertoId'];

    console.log(id);

    if (id === undefined) {
      this.huertComService.getAll()
        .then(result => {
          for (let huerto of result) {

            this.huertosLocalizacion.push(
              {
                latitud: huerto.latitud,
                longitud: huerto.longitud,
                zoom: 10
              })
          }
        })
    } else {
      this.huertComService.getById(id)
        .then(result => {

          this.huertosLocalizacion.push({
            latitud: result.latitud,
            longitud: result.longitud,
            zoom: 16
          });


        })
    }

  }

}
