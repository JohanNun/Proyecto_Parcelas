import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  div_visible: boolean = false;

  constructor(private router: Router,
    public usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  onClick(pRuta: string) {
    this.router.navigate([pRuta])
  }

  onCancel() {

    setTimeout(() => {
      this.usuariosService.logOut();
      this.router.navigate(['/home']);
    }, 2000);


  }

}
