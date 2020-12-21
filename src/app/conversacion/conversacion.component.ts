import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conversacion, Mensaje, MensajesService } from '../services/mensajes.service';
import { usuario, UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-conversacion',
  templateUrl: './conversacion.component.html',
  styleUrls: ['./conversacion.component.css']
})
export class ConversacionComponent implements OnInit {

  conversacion: Conversacion;
  conversaciones: Conversacion[];
  usuario: usuario;
  texto: string;
  mensaje: Mensaje;


  constructor(private activatedRoute: ActivatedRoute,
    private mensajesService: MensajesService,
    public usuariosService: UsuariosService) {

  }



  async ngOnInit() {

    let id = this.activatedRoute.snapshot.params['id'];

    this.mensajesService.getConversacion(id)
      .then(result => {
        this.conversacion = result;
        console.log(this.conversacion);
      })



    let idUsuario = localStorage.getItem('idUsuario');

    this.usuariosService.getUsuario(idUsuario)
      .then(result => {
        this.usuario = result;
      })


  }



  onClickEnviar() {
    let idUsuario = localStorage.getItem('idUsuario');
    let id = this.activatedRoute.snapshot.params['id'];

    this.mensajesService.create(this.texto, idUsuario, id)
      .then(result => {
        console.log(result);
        this.mensaje = result;
        console.log(this.mensaje.fk_conversacion);

        this.mensajesService.getConversacion(id)
          .then(result => {
            console.log(result);

            this.conversacion = result;
            this.texto = "";
          })



      })
      .catch()
  }



  borrar(mensajeId) {


    let id = this.activatedRoute.snapshot.params['id'];

    this.mensajesService.borrar(mensajeId)
      .then(result => {
        this.mensajesService.getConversacion(id)
          .then(result => {
            this.conversacion = result;
            console.log(this.conversacion);
          })
      })




  }

}
