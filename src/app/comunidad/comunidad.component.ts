import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(pRuta: string) {
    this.router.navigate([pRuta]);
  }

}
