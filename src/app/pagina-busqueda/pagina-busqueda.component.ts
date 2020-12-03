import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagenesgaleriaService } from '../services/imagenesgaleria.service';

@Component({
  selector: 'app-pagina-busqueda',
  templateUrl: './pagina-busqueda.component.html',
  styleUrls: ['./pagina-busqueda.component.css']
})
export class PaginaBusquedaComponent implements OnInit {

  val: number[];

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

  constructor(private router: Router, private imagenesService: ImagenesgaleriaService) { }

  ngOnInit(): void {
    this.imagenesService.getImagenes()
      .then(imagenes => this.imagenes = imagenes)
  }

  onClick(pRuta: string) {
    this.router.navigate([pRuta])
  }

}
