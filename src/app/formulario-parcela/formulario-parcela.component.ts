import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ParcelasService } from '../services/parcelas.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-formulario-parcela',
  templateUrl: './formulario-parcela.component.html',
  styleUrls: ['./formulario-parcela.component.css'],
  providers: [MessageService]
})
export class FormularioParcelaComponent implements OnInit {

  formularioParcela: FormGroup;


  constructor(public parcelasService: ParcelasService,
    public usuariosService: UsuariosService,
    private router: Router,
    private messageService: MessageService) {


    this.formularioParcela = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      tamano_total: new FormControl('', [Validators.required]),
      tamano_disponible: new FormControl('', [Validators.required]),
      precio_metro: new FormControl('', [Validators.required]),
      images: new FormControl('', [Validators.required]),
      localizacion: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required])
    })

  }

  ngOnInit(): void {
  }

  onSubmit() {

    this.parcelasService.create(this.formularioParcela.value)
      .then(response => {
        console.log(response)
        this.messageService.add({ severity: 'success', summary: 'Tu anuncio se ha publicado correctamente', detail: 'Urban Garden' });
      })
      .catch(error => console.log(error))

    this.formularioParcela.reset();

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2500);
  }





  redirigir(pRuta) {
    this.router.navigate([pRuta])
  }

}
