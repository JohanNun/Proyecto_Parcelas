import { Component, OnInit } from '@angular/core';
import { ImagenesgaleriaService } from '../services/imagenesgaleria.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-pagina-usuario',
  templateUrl: './pagina-usuario.component.html',
  styleUrls: ['./pagina-usuario.component.css']
})
export class PaginaUsuarioComponent implements OnInit {

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

  constructor(public usuariosService: UsuariosService,
    private imagenesService: ImagenesgaleriaService) { }

  ngOnInit(): void {
    this.imagenesService.getImagenes()
      .then(imagenes => this.imagenes = imagenes)
  }


  onClick($event) {
    $event.target.classList.toggle('grande');
  }




}
