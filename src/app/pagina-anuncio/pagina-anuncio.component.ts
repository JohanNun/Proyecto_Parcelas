import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagenesgaleriaService } from '../services/imagenesgaleria.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-pagina-anuncio',
  templateUrl: './pagina-anuncio.component.html',
  styleUrls: ['./pagina-anuncio.component.css']
})
export class PaginaAnuncioComponent implements OnInit {

  imagenes: any[];

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
    public usuariosService: UsuariosService,
    private imagenesService: ImagenesgaleriaService) { }

  ngOnInit(): void {
    this.imagenesService.getImagenes()
      .then(imagenes => this.imagenes = imagenes)
  }


  onClick(pRuta: string) {
    this.router.navigate([pRuta])
  }

  /* onClickImagen($event) {
    $event.target.classList.toggle('grande');
  } */
}
