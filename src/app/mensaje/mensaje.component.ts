import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  formularioMensaje: FormGroup;

  constructor() {

    this.formularioMensaje = new FormGroup({
      mensaje: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)])
    })
  }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.formularioMensaje.value);

    this.formularioMensaje.reset();

  }

}
