import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  tipoPassword: string;

  constructor(private usuariosService: UsuariosService) {

    this.tipoPassword = 'password';

    this.formulario = new FormGroup({

      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      sexo: new FormControl(),
      nombre_usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d).{4,8}$/)]),
      repite_password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      locacion: new FormControl('', [Validators.required]),
      fecha_nacimiento: new FormControl(),
      imagen: new FormControl(),
      experiencia: new FormControl(),
      descripcion: new FormControl()
    }, [this.passwordValidator])

  }

  ngOnInit(): void {
  }

  onSubmit() {
    /* console.log(this.formulario.value); */
    this.usuariosService.create(this.formulario.value)
      .then(response => {
        console.log(response);

      })
      .catch(error => console.log(error));

    this.formulario.reset();
  }


  passwordValidator(form: FormGroup) {
    const passwordValue = form.get('password').value;

    const passwordRepeatValue = form.get('repite_password').value;

    if (passwordValue === passwordRepeatValue) {
      return null;
    } else {
      form.get('repite_password').setErrors({ passwordvalidator: true });
      return { passwordvalidator: true };
    }
  }

  onClick($event) {
    $event.preventDefault();
    if (this.tipoPassword === 'text') {
      this.tipoPassword = 'password';
    } else {
      this.tipoPassword = 'text';
    }
  }

}
