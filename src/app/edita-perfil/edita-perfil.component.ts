import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { parcela, ParcelasService } from '../services/parcelas.service';
import { usuario, UsuariosService } from '../services/usuarios.service';


@Component({
  selector: 'app-edita-perfil',
  templateUrl: './edita-perfil.component.html',
  styleUrls: ['./edita-perfil.component.css'],
  providers: [MessageService]
})
export class EditaPerfilComponent implements OnInit {


  formulario: FormGroup;
  usuario: usuario;
  id: number;
  parcelas: parcela[];
  parcela: parcela;
  idParcela: number;

  constructor(private usuariosService: UsuariosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private parcelasService: ParcelasService) {



    this.formulario = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      sexo: new FormControl(''),
      nombre_usuario: new FormControl(''),
      password: new FormControl('', [Validators.pattern(/^(?=.*\d).{4,8}$/)]),
      email: new FormControl('', [Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      locacion: new FormControl(''),
      fecha_nacimiento: new FormControl(''),
      imagen: new FormControl(''),
      telefono: new FormControl(''),
      descripcion: new FormControl('')
    })

  }



  ngOnInit(): void {

    let id = this.activatedRoute.snapshot.params['id'];
    this.id = id;


    this.usuariosService.getUsuario(id)
      .then(result => {
        this.usuario = result;


        this.formulario = new FormGroup({
          id: new FormControl(this.usuario.id),
          nombre: new FormControl(this.usuario.nombre),
          apellidos: new FormControl(this.usuario.apellidos),
          sexo: new FormControl(this.usuario.sexo),
          nombre_usuario: new FormControl(this.usuario.nombre_usuario),
          password: new FormControl(this.usuario.password),
          email: new FormControl(this.usuario.email, [Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
          locacion: new FormControl(this.usuario.locacion),
          fecha_nacimiento: new FormControl(this.usuario.fecha_nacimiento),
          imagen: new FormControl(this.usuario.imagen),
          telefono: new FormControl(this.usuario.telefono),
          descripcion: new FormControl(this.usuario.descripcion)
        })



      })
      .catch(error => console.log(error)
      )



  }




  onSubmit() {
    console.log(this.formulario.value);

    let id = this.activatedRoute.snapshot.params['id'];

    this.usuariosService.update(this.formulario.value)
      .then(response => {
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Perfil actualizado 🌱', detail: 'Urban Garden' });

      })
      .catch(error => console.log(error));

    setTimeout(() => {
      this.router.navigate(['/perfil-usuario', id]);
    }, 2500);
  }






}
