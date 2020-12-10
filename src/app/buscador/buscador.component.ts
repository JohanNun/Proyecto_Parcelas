import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { parcela, ParcelasService } from '../services/parcelas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public parcelas: parcela[];
  busqueda: string;

  /* formularioBuscador: FormGroup; */

  constructor(private router: Router,
    private parcelasService: ParcelasService,
    private activatedRoute: ActivatedRoute) {

    /* this.formularioBuscador = new FormGroup({
      ciudad: new FormControl('')
    }) */
  }

  ngOnInit(): void {
    let ciudad = this.activatedRoute.snapshot.params;
    this.parcelasService.getCiudad(ciudad)
      .then(result => {
        this.parcelas = result;
      })
      .catch(error => console.log(error))
  }




  onClick() {
    console.log(this.busqueda);

    this.router.navigate(['/pagina-busqueda', this.busqueda]);
  }



}
