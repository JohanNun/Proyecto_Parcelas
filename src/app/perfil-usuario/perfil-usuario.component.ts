import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parcela, ParcelasService } from '../services/parcelas.service';
import { usuario, UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  parcelitas: parcela[];
  usuario: usuario;

  constructor(private activatedRoute: ActivatedRoute,
    private usuarioService: UsuariosService,
    private parcelasService: ParcelasService,
    private router: Router) { }

  ngOnInit(): void {

    let nombre_usuario = this.activatedRoute.snapshot.params['nombre_usuario']
    this.usuarioService.getByUserName(nombre_usuario)
      .then(response => {
        this.usuario = response;
        console.log(this.usuario);

      })
      .catch(error => console.log(error)
      )



    /* Recibir parcelas por ID del usuario */

    this.parcelasService.getParcelasByUserName(nombre_usuario)
      .then(result => {
        this.parcelitas = result;
      })
      .catch(error => console.log(error)
      )



  }



  onClick(pRuta) {

    this.router.navigate(['pagina-anuncio', pRuta.id])

  }


}
