import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-formulario-parcela',
  templateUrl: './formulario-parcela.component.html',
  styleUrls: ['./formulario-parcela.component.css']
})
export class FormularioParcelaComponent implements OnInit {

  formularioParcela: FormGroup;

  constructor(public usuariosService: UsuariosService,
    private router: Router) {

    this.formularioParcela = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      tamaño: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      imagenes: new FormControl('', [Validators.required]),
      localizacion: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required])
    })

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formularioParcela.value);
  }

  redirigir(pRuta) {
    this.router.navigate([pRuta])
  }

}
