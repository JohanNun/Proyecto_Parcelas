import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  @Input() fitBounds: boolean = true;

  @Input() parcelas: any[];
  busqueda: string;

  constructor(private parcelasService: ParcelasService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.parcelas = [];

    this.latitud = 0;
    this.longitud = 0;

  }

  ngOnInit(): void {
    let ciudad = this.activatedRoute.snapshot.params['ciudad']

    navigator.geolocation.getCurrentPosition(async position => {

      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;
      /* this.zoom = 5; */
      /* this.parcelas = await this.parcelasService.getAll() */
      if (ciudad !== '') {

        /* this.parcelas = await this.parcelasService.getCiudad(ciudad) */



      } else {

        /* this.parcelas = await this.parcelasService.getAll() */

      }


    });



  }


  onSearch() {

    if (this.busqueda !== '') {

      this.parcelasService.getCiudad(this.busqueda)
        .then(result => {
          this.parcelas = result


          console.log(this.parcelas);

        })


    } else {

      this.parcelasService.getAll()
        .then(result => {
          this.parcelas = result



          console.log(this.parcelas);

        })
        .catch(error => console.log(error))
    }


    this.router.navigate(['/pagina-busqueda', this.busqueda]);
    this.busqueda = "";

  }


}
