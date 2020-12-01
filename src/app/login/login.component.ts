import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;
  mensajeError: string;


  constructor(private usuariosService: UsuariosService,
    private router: Router) {

    this.formularioLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })

  }

  ngOnInit(): void {
  }


  onSubmit() {
    this.usuariosService.login(this.formularioLogin.value)

      .then(response => {
        console.log(response);

        if (response['error']) {
          this.mensajeError = response['error']

          this.formularioLogin.reset();

          //Quitar mensaje al reintroducir data

        } else {
          localStorage.setItem('login_usuario', response['token']);

          this.router.navigate(['/home']);  //Cuando el login este hecho manda a la pagina home
        }



      })
      .catch(error => console.log(error));

  }
}
