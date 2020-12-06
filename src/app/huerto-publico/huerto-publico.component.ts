import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HuertComService } from '../services/huert-com.service';

@Component({
  selector: 'app-huerto-publico',
  templateUrl: './huerto-publico.component.html',
  styleUrls: ['./huerto-publico.component.css']
})
export class HuertoPublicoComponent implements OnInit {

  idHuerto: any;
  titulos: any;

  constructor(private activatedRoute: ActivatedRoute,
    private huertCom: HuertComService) { }

  ngOnInit(): void {



    let id = this.activatedRoute.snapshot.params['huertoId'];


    this.titulos = this.huertCom.getById(id)
      .then(huerto => {
        this.titulos = huerto;
        console.log(huerto);
      })
      .catch(error => console.log(error))



  }

}
