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
  subscripcion: Subscription;


  constructor(private cultivoService: CultivoService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {


  }


  onSearch() {

    if (this.busqueda === "") {

    } else {
      this.cultivoService.getInfo(this.busqueda)
        .then(res => {
          this.cultivo = res;
          this.busqueda = "";
        })
    }


  }


}

