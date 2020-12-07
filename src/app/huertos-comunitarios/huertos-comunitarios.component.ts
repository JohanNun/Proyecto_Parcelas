import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HuertComService } from '../services/huert-com.service';

@Component({
  selector: 'app-huertos-comunitarios',
  templateUrl: './huertos-comunitarios.component.html',
  styleUrls: ['./huertos-comunitarios.component.css']
})
export class HuertosComunitariosComponent implements OnInit {

  public titulos: any[];
  public urlSeleccionado: string;

  constructor(private router: Router,
    private huertCom: HuertComService,) { }


  ngOnInit(): void {
    this.huertCom.getAll()
      .then(result => {
        this.titulos = result;
      })


  }


  async onClick(pRuta) {
    this.router.navigate(['/huertos-colectivos', pRuta.id]);
  }

  async onSelect(pId) {
    this.titulos = await this.huertCom.getById(pId);
    return this.titulos;
  }


}
