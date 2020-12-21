import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parcela, ParcelasService } from '../services/parcelas.service';
import { Trozo, TrozosService } from '../services/trozos.service';
import { usuario, UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  parcelitas: parcela[];
  usuario: usuario;
  trozo: Trozo;
  trozos: any[];


  constructor(private activatedRoute: ActivatedRoute,
    private usuarioService: UsuariosService,
    private parcelasService: ParcelasService,
    private TrozosService: TrozosService,
    private router: Router) { }

  ngOnInit(): void {

    let id = this.activatedRoute.snapshot.params['id']
    console.log(id);

    this.usuarioService.getUsuario(id)
      .then(response => {
        this.usuario = response;
        console.log(this.usuario);


      })
      .catch(error => console.log(error)
      )



    /* Recibir parcelas por ID del usuario */

    this.parcelasService.getParcelaByUsuarioId(id)
      .then(result => {
        this.parcelitas = result;
      })
      .catch(error => console.log(error)
      )




  }



  onClick(pRuta) {

    this.router.navigate(['pagina-anuncio', pRuta.id])

  }


  onClickUpdate(pRuta) {
    let id = this.activatedRoute.snapshot.params['id']
    this.router.navigate([pRuta, id]);
  }

  onClickUpdateParcela(pId) {
    console.log(pId);

    this.router.navigate(['edita-parcela', pId]);
  }



}
