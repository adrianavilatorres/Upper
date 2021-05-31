import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, PeliculaDetalle } from 'src/app/Interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';
import { MoviesService } from 'src/app/services/movies.service';
import { FirebaseService } from '../../services/firebase.service';
import { Video } from '../../Interfaces/interfaces';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id: any;
  pelicula: PeliculaDetalle = {};
  video: any[] = [];
  actores: Cast [] = [];

  texto = 150;
  estrella = 'star-outline';

  masBolean = true;
  menosBolean = false;

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  };

  constructor( private movieService: MoviesService,private fireService: FirebaseService, private modalCtrl: ModalController, private dataLocal: DataLocalService ) {
    

    
   }

  ngOnInit() {
    this.dataLocal.existePelicula( this.id ).then( existe => this.estrella = (existe) ? 'star': 'star-outline');

    this.getVideoDetail(this.id)

    // this.movieService.getMovieDetalle(this.id).subscribe( resp => {
    //   console.log( resp );
    //   this.pelicula = resp;
    // } );

    // this.movieService.getCreditsMovie(this.id).subscribe( resp => {
    //   console.log( resp );
    //   this.actores = resp.cast;
    // } );
  }


   getVideoDetail(id: string){
    this.fireService.getVideo(id).then((resp: any[]) => {
      
      this.video = resp
      console.log(resp);
      
      
      
      
    })
    
    
    
    
  }

  

  mostrarMas(){
  this.masBolean = !this.masBolean;
  this.menosBolean = !this.menosBolean;
  this.texto = 5000;
  }

  mostrarMenos(){
    this.masBolean = !this.masBolean;
  this.menosBolean = !this.menosBolean;
  this.texto = 150;
  }

  regresar(){
    this.modalCtrl.dismiss();
  }

  favoritos(){
    const existe = this.dataLocal.guardarPelicula( this.pelicula );
    this.estrella = (existe) ? 'star': 'star-outline';

  }

}
