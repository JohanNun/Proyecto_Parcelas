import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagenesgaleriaService } from '../services/imagenesgaleria.service';
import { Conversacion, MensajesService } from '../services/mensajes.service';
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
  conversacion: Conversacion;



  constructor(public usuariosService: UsuariosService,
    private activatedRoute: ActivatedRoute,
    private mensajesService: MensajesService,
    private router: Router) {

  }

  ngOnInit(): void {

    //Recuperar usuario
    let id = this.activatedRoute.snapshot.params['id'];


    this.usuariosService.getUsuario(id)
      .then(result => {
        this.usuario = result;

      })

  }



  createConversacion(pUsuarioId) {
    let idUsuario = localStorage.getItem('idUsuario');

    this.mensajesService.createConversacion(idUsuario, pUsuarioId)
      .then(result => {
        this.conversacion = result;

        this.router.navigate(['conversacion', this.conversacion.id]);
      })
  }


  onClick(pRuta) {
    this.router.navigate([pRuta])
  }

}
