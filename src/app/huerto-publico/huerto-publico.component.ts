import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HuertComService } from '../services/huert-com.service';

@Component({
  selector: 'app-huerto-publico',
  templateUrl: './huerto-publico.component.html',
  styleUrls: ['./huerto-publico.component.css']
})
export class HuertoPublicoComponent implements OnInit {

  public idHuerto;
  titulos: any[];

  constructor(private activatedRoute: ActivatedRoute,
    private huertCom: HuertComService) { }

  ngOnInit(): void {

    this.huertCom.getAll()
      .then(result => {
        this.titulos = result;
      })

    /* let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.idHuerto = id; */

    this.activatedRoute.params.subscribe(params => {
      this.idHuerto = params.huertoId;
    })
  }

}
