import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  imagenes: any[]

  responsiveOptions: any[] = [
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
  ];

  constructor(private router: Router,
    private imagenesService: ImagenesgaleriaService,
    private parcelasService: ParcelasService) { }

  ngOnInit(): void {
    /* this.imagenesService.getImagenes()
      .then(imagenes => this.imagenes = imagenes) */
    this.parcelasService.getAll()
      .then(result => {
        this.parcelitas = result
      })
      .catch(error => console.log(error))

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



  onClick(pRuta: string) {
    this.router.navigate([pRuta])
  }



}
