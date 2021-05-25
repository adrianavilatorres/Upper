import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera.response';
import Swiper from 'swiper';

@Component({
  selector: 'app-pelis-slideshow',
  templateUrl: './pelis-slideshow.component.html',
  styleUrls: ['./pelis-slideshow.component.css']
})
export class PelisSlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 7,
      freeMode: true,
      spaceBetween: 20
    });
  }

}
