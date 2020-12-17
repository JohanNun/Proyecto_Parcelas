import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conversacion, Mensaje, MensajesService } from '../services/mensajes.service';
import { usuario, UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-mensajes-privados',
  templateUrl: './mensajes-privados.component.html',
  styleUrls: ['./mensajes-privados.component.css']
})
export class MensajesPrivadosComponent implements OnInit {

  conversaciones: Conversacion[];
  usuario: usuario;

  constructor(private mensajesService: MensajesService,
    private usuariosService: UsuariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.conversaciones = [];
  }

  async ngOnInit() {

    let id = localStorage.getItem('idUsuario');

    const mensajesUsuario = await this.mensajesService.getAllConversaciones();
    this.conversaciones = mensajesUsuario
    console.log(this.conversaciones);





    this.usuariosService.getUsuario(id)
      .then(result => {
        this.usuario = result;
      })


  }




  onClick(pId) {

    this.router.navigate(['conversacion', pId])
  }

}

