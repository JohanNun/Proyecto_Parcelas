import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagenesgaleriaService } from '../services/imagenesgaleria.service';
import { parcela, ParcelasService } from '../services/parcelas.service';
import { usuario, UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-pagina-anuncio',
  templateUrl: './pagina-anuncio.component.html',
  styleUrls: ['./pagina-anuncio.component.css']
})
export class PaginaAnuncioComponent implements OnInit {

  imagenes: any[];
  parcela: parcela;
  usuario: usuario;
  parcelas: any[];


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

  constructor(private router: Router,
    public usuariosService: UsuariosService,
    private imagenesService: ImagenesgaleriaService,
    private parcelasService: ParcelasService,
    private activatedRoute: ActivatedRoute) {
    this.parcelas = [];
  }

  ngOnInit(): void {
    this.imagenesService.getImagenes()
      .then(imagenes => this.imagenes = imagenes)


    let id = this.activatedRoute.snapshot.params['idParcela'];

    this.parcelasService.getById(id)
      .then(result => {
        this.parcela = result
        console.log(result);

        const positionParcelas = new Array();


        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: this.parcela.calle }, function (result, status) {

          if (status === google.maps.GeocoderStatus.OK) {
            let position = result[0].geometry.location;
            positionParcelas.push({ latitud: position.lat(), longitud: position.lng() });
          }

        });


        this.parcelas = positionParcelas;

      })



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




  onClick(pRuta) {

    let id = this.activatedRoute.snapshot.params['idParcela'];


    this.usuariosService.getUserByParcela(id)
      .then(result => {
        this.usuario = result;
        console.log(this.usuario);

      })

    this.router.navigate(['pagina-usuario', id]);
  }



}
