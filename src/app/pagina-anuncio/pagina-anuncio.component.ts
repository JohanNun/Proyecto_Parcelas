import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-anuncio',
  templateUrl: './pagina-anuncio.component.html',
  styleUrls: ['./pagina-anuncio.component.css']
})
export class PaginaAnuncioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onClick(pRuta: string) {
    this.router.navigate([pRuta])
  }

  onClickImagen($event) {
    $event.target.classList.toggle('grande');
  }
}
