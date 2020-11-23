import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  tipoPassword: string;

  constructor() {

    this.tipoPassword = 'password';

    this.formulario = new FormGroup({

      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      sexo: new FormControl(),
      nombreusuario: new FormControl('', [Validators.required]),
      contraseña: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d).{4,8}$/)]),
      repitecontraseña: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      localizacion: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required, this.dniValidator]),
      numerotelefono: new FormControl(),
      fechanacimiento: new FormControl(),
      imagen: new FormControl(),
      parcela: new FormControl('', [Validators.required]),
      experiencia: new FormControl(),
      descripcion: new FormControl()
    }, [this.passwordValidator])

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value);
  }


  dniValidator(control: FormControl) {
    const dni = control.value;

    const conjuntoLetras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (/^\d{8}[a-zA-Z]$/.test(dni) == true) {
      let numero = (dni.substr(0, dni.length - 1)) % 23;
      let letraDni = dni.substr(dni.length - 1, 1);

      let letraCorrecta = conjuntoLetras.substring(numero, numero + 1);
      if (letraCorrecta != letraDni.toUpperCase()) {
        return { dnivalidator: 'La letra no coincide' };
      } else {
        return null;
      }
    } else {
      return { dnivalidator: 'El formato del DNI es incorrecto' };
    }
  }

  passwordValidator(form: FormGroup) {
    const passwordValue = form.get('contraseña').value;

    const passwordRepeatValue = form.get('repitecontraseña').value;

    if (passwordValue === passwordRepeatValue) {
      return null;
    } else {
      form.get('repitecontraseña').setErrors({ passwordvalidator: true });
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
