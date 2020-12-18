import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ImagenesgaleriaService } from '../services/imagenesgaleria.service';
import { parcela, ParcelasService } from '../services/parcelas.service';

@Component({
  selector: 'app-pagina-busqueda',
  templateUrl: './pagina-busqueda.component.html',
  styleUrls: ['./pagina-busqueda.component.css']
})
export class PaginaBusquedaComponent implements OnInit {

  val: number[];
  parcelitas: parcela[];
  imagenes: any[];
  parcelas: any[];
  cora: boolean;
  arrCora: any[];

  busqueda: string;
  subscripcion: Subscription



  /*   responsiveOptions: any[] = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ]; */

  constructor(private router: Router,
    private imagenesService: ImagenesgaleriaService,
    private parcelasService: ParcelasService,
    private activatedRoute: ActivatedRoute) {

    this.parcelas = [];
    this.cora = false;
    this.arrCora = [];

  }

  ngOnInit(): void {

    // Recuperar las parcelas (todas o por ciudad introducida)
    this.subscripcion = this.activatedRoute.paramMap.subscribe(params => {
      let ciudad = params.get('ciudad');

      if (!ciudad) {
        this.parcelasService.getAll()
          .then(result => {
            this.parcelitas = result
            console.log(this.parcelitas);

          })
      } else {
        this.parcelasService.getCiudad(ciudad)
          .then(result => {
            this.parcelitas = result;
          })
      }

    });


    let ciudadita = this.activatedRoute.snapshot.params['ciudad'];

    //Recuperar mapas 

    if (ciudadita !== '') {

      this.parcelasService.getCiudad(ciudadita)
        .then(result => {
          this.parcelitas = result

          const positionParcelas = new Array();

          for (let parcela of this.parcelitas) {

            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ address: parcela.calle }, function (result, status) {

              if (status === google.maps.GeocoderStatus.OK) {
                let position = result[0].geometry.location;
                positionParcelas.push({ latitud: position.lat(), longitud: position.lng() });
              }

            });
          }

          this.parcelas = positionParcelas;
          console.log(this.parcelas);

        })

    } else {

      this.parcelasService.getAll()
        .then(result => {
          this.parcelitas = result

          const positionParcelas = new Array();

          for (let parcela of this.parcelitas) {

            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ address: parcela.calle }, function (result, status) {

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


  onSelect($event) {

    if ($event.target.value == "pA") {
      this.parcelasService.selectByPrecioUp()
        .then(result => {
          this.parcelitas = result;
        })
        .catch(error => console.log(error))
    } else if ($event.target.value == "pD") {
      this.parcelasService.selectByPrecioDown()
        .then(result => {
          this.parcelitas = result;
        })
        .catch(error => console.log(error))
    } else if ($event.target.value == "tD") {
      this.parcelasService.selectByTamano()
        .then(result => {
          this.parcelitas = result;
        })
        .catch(error => console.log(error))
    }
  }



  onClick(pRuta) {

    this.router.navigate(['pagina-anuncio', pRuta.id])

  }


  agregarFav(pCora) {



  }

}
