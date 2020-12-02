import { Component, OnInit } from '@angular/core';
import { ImagenesgaleriaService } from '../services/imagenesgaleria.service';

@Component({
  selector: 'galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  imagenes: any[]

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  responsiveOptions2: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5
    },
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  displayBasic: boolean;

  displayBasic2: boolean;

  displayCustom: boolean;

  activeIndex: number = 0;


  constructor(private imagenesService: ImagenesgaleriaService) { }



  ngOnInit(): void {
    this.imagenesService.getImagenes()
      .then(imagenes => this.imagenes = imagenes)
  }

  imagenClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }

}
