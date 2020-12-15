import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagenesgaleriaService } from '../services/imagenesgaleria.service';
import { parcela, ParcelasService } from '../services/parcelas.service';
import { usuario, UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-pagina-usuario',
  templateUrl: './pagina-usuario.component.html',
  styleUrls: ['./pagina-usuario.component.css']
})
export class PaginaUsuarioComponent implements OnInit {

  imagenes: any[];
  usuario: usuario;
  parcela: parcela;

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
    private parcelasService: ParcelasService,
    private imagenesService: ImagenesgaleriaService,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.imagenesService.getImagenes()
      .then(imagenes => this.imagenes = imagenes)

    //Recuperar usuario
    let id = this.activatedRoute.snapshot.params['id'];

    this.parcelasService.getById(id)
      .then(result => {
        this.parcela = result;
        this.usuariosService.getUsuario(this.parcela.fk_usuario)
          .then(result => {
            this.usuario = result;
            console.log(this.usuario);

          })
      })



  }
}
