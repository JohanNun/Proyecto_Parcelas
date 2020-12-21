import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { comentario, ComentariosService } from '../services/comentarios.service';
import { ImagenesgaleriaService } from '../services/imagenesgaleria.service';
import { Conversacion, MensajesService } from '../services/mensajes.service';
import { parcela, ParcelasService } from '../services/parcelas.service';
import { TrozosService } from '../services/trozos.service';
import { usuario, UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-pagina-anuncio',
  templateUrl: './pagina-anuncio.component.html',
  styleUrls: ['./pagina-anuncio.component.css'],
  providers: [MessageService]
})
export class PaginaAnuncioComponent implements OnInit {

  imagenes: any[];
  parcela: parcela;
  usuario: usuario;
  usuario2: usuario[];
  parcelas: any[];
  comentarios: comentario[];
  nuevocomentario: string;
  idUsuario: number;
  conversacion: Conversacion;

  formularioReserva: FormGroup;

  constructor(private router: Router,
    public usuariosService: UsuariosService,
    private imagenesService: ImagenesgaleriaService,
    private parcelasService: ParcelasService,
    private comentariosService: ComentariosService,
    private activatedRoute: ActivatedRoute,
    private mensajesService: MensajesService,
    private trozosService: TrozosService,
    private messageService: MessageService) {
    this.parcelas = [];
    this.comentarios = [];
    this.usuario2 = [];

    this.formularioReserva = new FormGroup({
      tamano: new FormControl('', [Validators.required])
    });
  }



  ngOnInit(): void {
    this.imagenesService.getImagenes()
      .then(imagenes => this.imagenes = imagenes)


    let id = this.activatedRoute.snapshot.params['idParcela'];

    this.comentariosService.getComentariosByParcelaId(id)
      .then(result => {
        this.comentarios = result
        console.log(this.comentarios)


      })

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
            this.idUsuario = parseInt(localStorage.getItem('idUsuario'));
            this.usuario = result;
            console.log(this.usuario);

          })
      })

  }


  onClickComentario() {
    let id = this.activatedRoute.snapshot.params['idParcela'];


    let idUsuario = localStorage.getItem('idUsuario');
    console.log(idUsuario);



    this.comentariosService.create(this.nuevocomentario, idUsuario, id)
      .then(response => {
        this.comentariosService.getComentariosByParcelaId(id)
          .then(result => {
            this.comentarios = result
            this.nuevocomentario = '';
            this.comentariosService.getComentariosByParcelaId(id)
              .then(result => {
                this.comentarios = result
                console.log(this.comentarios)


              })




          })
      })

  }

  onClickPaginaUsuario(pIdUsuario) {
    console.log(pIdUsuario);
    this.router.navigate(['pagina-usuario', pIdUsuario]);

  }

  onClickDelete(pIdComentario) {
    let id = this.activatedRoute.snapshot.params['idParcela'];
    this.comentariosService.delete(pIdComentario)
      .then(result => {
        this.comentariosService.getComentariosByParcelaId(id)
          .then(result => {
            this.comentarios = result
            console.log(this.comentarios)


          })


      })

  }




  onClick(pIdUsuario) {
    console.log(pIdUsuario);


    /* let id = this.activatedRoute.snapshot.params['idParcela']; */

    this.router.navigate(['pagina-usuario', pIdUsuario]);
  }


  createConversacion(pUsuarioId) {
    let idUsuario = localStorage.getItem('idUsuario');

    this.mensajesService.createConversacion(idUsuario, pUsuarioId)
      .then(result => {
        this.conversacion = result;
        console.log(this.conversacion);

        this.router.navigate(['conversacion', this.conversacion.id]);
      })
  }




  redirigir(pRuta) {
    this.router.navigate([pRuta])
  }



  onSubmit() {

    let id = this.activatedRoute.snapshot.params['idParcela'];
    let idUsuario = localStorage.getItem('idUsuario');

    this.trozosService.reservar(this.formularioReserva.value.tamano, id, idUsuario)
      .then(response => {
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Tu reserva se ha hecho correctamente! ', detail: 'Urban Garden' });

        this.formularioReserva.reset();

        this.parcelasService.getById(id)
          .then(result => {
            this.parcela = result;
            this.usuariosService.getUsuario(this.parcela.fk_usuario)
              .then(result => {
                this.idUsuario = parseInt(localStorage.getItem('idUsuario'));
                this.usuario = result;
                console.log(this.usuario);

              })
          })

      })
      .catch(error => console.log(error))
  }



}
