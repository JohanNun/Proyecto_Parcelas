import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-parcela',
  templateUrl: './formulario-parcela.component.html',
  styleUrls: ['./formulario-parcela.component.css']
})
export class FormularioParcelaComponent implements OnInit {

  formularioParcela: FormGroup;

  constructor() {

    this.formularioParcela = new FormGroup({
      titulo: new FormControl(),
      tamaño: new FormControl(),
      precio: new FormControl(),
      imagenes: new FormControl(),
      localizacion: new FormControl(),
      descripcion: new FormControl()
    })

  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
