import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { usuario, UsuariosService } from '../services/usuarios.service';


@Component({
  selector: 'app-edita-perfil',
  templateUrl: './edita-perfil.component.html',
  styleUrls: ['./edita-perfil.component.css']
})
export class EditaPerfilComponent implements OnInit {

  formulario: FormGroup;
  usuario: usuario;
  id: number;

  constructor(private usuariosService: UsuariosService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {


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

    this.usuariosService.update(this.formulario.value)
      .then(response => {
        console.log(response);
        /* this.usuario = response; */

      })
      .catch(error => console.log(error));

    /* this.router.navigate(['/home']); */
  }




}
