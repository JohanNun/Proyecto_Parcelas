import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-huertos-comunitarios',
  templateUrl: './huertos-comunitarios.component.html',
  styleUrls: ['./huertos-comunitarios.component.css']
})
export class HuertosComunitariosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(pRuta: string) {
    this.router.navigate([pRuta]);
  }


}
