import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mensaje, MensajesService } from '../services/mensajes.service';
import { usuario, UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-mensajes-privados',
  templateUrl: './mensajes-privados.component.html',
  styleUrls: ['./mensajes-privados.component.css']
})
export class MensajesPrivadosComponent implements OnInit {

  mensajes: Mensaje[];
  usuario: usuario;

  constructor(private mensajesService: MensajesService,
    private usuariosService: UsuariosService,
    private activatedRoute: ActivatedRoute) {
    this.mensajes = [];
  }

  async ngOnInit() {

    let id = localStorage.getItem('idUsuario');



    const mensajesEnviados = await this.mensajesService.getMisMensajes(id)
    for (let miMensaje of mensajesEnviados) {
      this.mensajes.push(miMensaje);

    }


    const mensajesRecibidos = await this.mensajesService.getMensajesReceptor(id)
    for (let miMensaje of mensajesRecibidos) {
      this.mensajes.push(miMensaje);

    }

    console.log(this.mensajes);


    this.usuariosService.getUsuario(id)
      .then(result => {
        this.usuario = result;
      })


    //Recibir nombre usuario 




  }

}

