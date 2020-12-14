import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  progress: ProgressSpinnerModule;
  imagen: string;


  constructor(private router: Router,
    public usuariosService: UsuariosService) {
  }

  ngOnInit(): void {
    this.imagen = (localStorage.getItem('imagen_usuario') !== null) ? localStorage.getItem('imagen_usuario') : "";
  }



  onClick(pRuta: string) {
    this.router.navigate([pRuta])
  }

  onCancel() {

    setTimeout(() => {
      this.usuariosService.logOut();
      this.progress;
      this.router.navigate(['/home']);
    }, 2000);


  }

}
