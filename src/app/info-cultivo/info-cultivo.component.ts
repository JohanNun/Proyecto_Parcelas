import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { cultivo, CultivoService } from '../services/cultivo.service';

@Component({
  selector: 'app-info-cultivo',
  templateUrl: './info-cultivo.component.html',
  styleUrls: ['./info-cultivo.component.css']
})
export class InfoCultivoComponent implements OnInit {

  cultivos: cultivo[];
  cultivo: cultivo;
  busqueda: string;
  sinDiv: boolean = true;
  sinBusc: boolean = false;


  constructor(private cultivoService: CultivoService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {


  }


  onSearch() {
    console.log(this.busqueda);

    if (this.busqueda === "") {

    } else {
      this.cultivoService.getInfo(this.busqueda)
        .then(res => {
          console.log(res);

          if (res) {
            this.sinDiv = false;
            this.cultivo = res;
            this.sinBusc = false;
            this.busqueda = "";
          } else if (this.cultivo == null) {
            this.sinBusc = true;
            this.sinDiv = true;
            this.busqueda = "";
          } else {
            this.sinDiv = true;
            this.sinBusc = true;
            this.busqueda = "";
          }





        })
    }


  }


}

