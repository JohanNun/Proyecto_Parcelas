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

    /* this.usuarioService.getUsuario() */


    let usuario = this.activatedRoute.snapshot.params['id'];
    this.parcelasService.getUsuarioByParcelaId(usuario)
      .then(result => {
        this.usuario = result;
        console.log(this.usuario)

      })
      .catch(error => console.log(error))
  }



  onClick(pRuta) {

    this.router.navigate(['pagina-anuncio', pRuta.id])

  }


}
