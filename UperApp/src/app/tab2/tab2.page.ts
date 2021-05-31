import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { Pelicula } from '../Interfaces/interfaces';
import { MoviesService } from '../services/movies.service';
import { FirebaseService } from '../services/firebase.service';
import firebase from 'firebase';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  peliculas: Pelicula[] = [];
  videos: any[] = [];
  ideas: string[] = ['Pecho, Abdominales, Espalda, Triceps'];
  buscando = false;

  constructor( private movieService: MoviesService, private modalCtrl: ModalController, private fireSerice: FirebaseService ) {}


  buscarVideos( event ){
    const valor: string = event.detail.value;

    if(valor.length === 0){
      this.buscando = false;
      this.videos =  [];
      return;
    }

    this.buscando = true;
    this.fireSerice.getVideoSearch(valor).then( resp => {
      console.log(resp);
      this.videos = resp;
      this.buscando = false;
    } );
  };

  buscar( event ){
    const valor: string = event.detail.value;

    if(valor.length === 0){
      this.buscando = false;
      this.peliculas =  [];
      return;
    }

    this.buscando = true;
    this.movieService.buscarPeliculas(valor).subscribe( resp => {
      console.log(resp);
      this.peliculas = resp ['results'];
      this.buscando = false;
    } );
  };

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
