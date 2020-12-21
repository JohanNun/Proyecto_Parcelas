import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuario, UsuariosService } from '../services/usuarios.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  progress: ProgressSpinnerModule;
  imagen: string;
  usuario: any;
  cambiaColor: boolean = true;


  constructor(private router: Router,
    public usuariosService: UsuariosService) {
  }

  ngOnInit(): void {
    this.imagen = (localStorage.getItem('imagen_usuario') !== null) ? localStorage.getItem('imagen_usuario') : "";
    this.usuario = localStorage.getItem('idUsuario')
    console.log(this.usuario);



  }



  onClick(pRuta: string) {
    this.router.navigate([pRuta])
  }


  onClick2(pRuta: string) {

    this.router.navigate([pRuta, this.usuario])

  }

  onCancel() {

    setTimeout(() => {
      this.usuariosService.logOut();
      this.progress;
      this.router.navigate(['/home']);
    }, 2000);


  }




  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowsScroll($event) {


    let scrollOffset = $event.srcElement.children[0].scrollTop;
    /* console.log("window scroll: ", scrollOffset); */

    if (scrollOffset > 125) {
      this.cambiaColor = false;
    } else {
      this.cambiaColor = true;
    }
  }


}
