import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { parcela, ParcelasService } from '../services/parcelas.service';

@Component({
  selector: 'app-edita-parcela',
  templateUrl: './edita-parcela.component.html',
  styleUrls: ['./edita-parcela.component.css']
})
export class EditaParcelaComponent implements OnInit {

  idParcela: number;
  fkUsuario: number;
  formularioParcela: FormGroup;
  parcela: parcela;

  constructor(private parcelasService: ParcelasService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {


    this.formularioParcela = new FormGroup({
      id: new FormControl(''),
      titulo: new FormControl(''),
      tamano_total: new FormControl(''),
      tamano_disponible: new FormControl(''),
      precio_metro: new FormControl(''),
      images: new FormControl(''),
      calle: new FormControl(''),
      CP: new FormControl(''),
      ciudad: new FormControl(''),
      descripcion: new FormControl(''),
      fk_usuario: new FormControl('')
    })
  }

  ngOnInit(): void {



    let id = this.activatedRoute.snapshot.params['id'];
    this.idParcela = id;
    this.parcelasService.getById(id)
      .then(result => {
        this.parcela = result;
        console.log(this.parcela);


        this.formularioParcela = new FormGroup({
          id: new FormControl(this.parcela.id),
          titulo: new FormControl(this.parcela.titulo),
          tamano_total: new FormControl(this.parcela.tamano_total),
          tamano_disponible: new FormControl(this.parcela.tamano_disponible),
          precio_metro: new FormControl(this.parcela.precio_metro),
          images: new FormControl(this.parcela.images),
          calle: new FormControl(this.parcela.calle),
          CP: new FormControl(this.parcela.CP),
          ciudad: new FormControl(this.parcela.ciudad),
          descripcion: new FormControl(this.parcela.descripcion),
          fk_usuario: new FormControl(this.parcela.fk_usuario)
        })
      })







  }

  onSubmitParcela() {
    console.log(this.formularioParcela.value);
    this.fkUsuario = this.parcela?.fk_usuario;



    this.parcelasService.update(this.formularioParcela.value)
      .then(response => {
        this.parcela = response;


      })
      .catch(error => console.log(error));

    setTimeout(() => {
      this.router.navigate(['/perfil-usuario', this.fkUsuario]);
    }, 2500);
  }

}
