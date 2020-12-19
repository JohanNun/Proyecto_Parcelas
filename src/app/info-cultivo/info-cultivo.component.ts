import { Component, OnInit } from '@angular/core';
import { CultivoService } from '../services/cultivo.service';

@Component({
  selector: 'app-info-cultivo',
  templateUrl: './info-cultivo.component.html',
  styleUrls: ['./info-cultivo.component.css']
})
export class InfoCultivoComponent implements OnInit {

  cultivos: any;
  cultivo: any;

  constructor(private cultivoService: CultivoService) { }

  ngOnInit(): void {

  }


  onSearch(pNombre) {

    this.cultivoService.getInfo(this.cultivo)
    console.log(this.cultivo);


  }

}
