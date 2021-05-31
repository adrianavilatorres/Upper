import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/Interfaces/interfaces';
import { FirebaseService } from 'src/app/services/firebase.service';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {


  @Input() peliculas: Pelicula[] = [];
  @Input() videos: any[] = [];
  @Input() videosFromCategory: any[] = [];
  category: string = 'pecho';

  @Output() cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.2,
    freeMode: true
  };


  constructor( private modalCtrl: ModalController ,private fireService: FirebaseService) { }

  ngOnInit() {
    this.getVideosFromCategory(this.category);
  }



  getVideosFromCategory(category: string){
    this.fireService.getVideosFromCategory(category).then( (resp: any[]) => {
      this.videosFromCategory = resp;
    });
  }

  onclick(){
    this.cargarMas.emit();
  }

  async verDetalle( id: string ){

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }

}
