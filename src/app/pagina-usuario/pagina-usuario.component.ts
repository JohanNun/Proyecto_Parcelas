import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-pagina-usuario',
  templateUrl: './pagina-usuario.component.html',
  styleUrls: ['./pagina-usuario.component.css']
})
export class PaginaUsuarioComponent implements OnInit {

  tamanoImagen: boolean = false;

  constructor(public usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }


  onClick($event) {
    $event.target.classList.toggle('grande');
  }



  mandarMensaje() {

  }








}
