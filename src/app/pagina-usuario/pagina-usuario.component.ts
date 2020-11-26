import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-usuario',
  templateUrl: './pagina-usuario.component.html',
  styleUrls: ['./pagina-usuario.component.css']
})
export class PaginaUsuarioComponent implements OnInit {

  tamanoImagen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  onClick($event) {
    $event.target.classList.toggle('grande');
  }








}
