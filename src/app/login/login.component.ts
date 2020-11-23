import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;

  constructor() {

    this.formularioLogin = new FormGroup({
      nombreusuario: new FormControl('', [Validators.required]),
      contraseña: new FormControl('', Validators.required)
    })

  }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.formularioLogin.value);

  }
}
