import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../Interfaces/interfaces';
import { MoviesService } from '../services/movies.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  peliculasRecientes: Pelicula[] = [];
  videosRecientes: any[] = [];
  videosFromCategory: any[] = [];

  

  populares: Pelicula[] = [];



  constructor(private movieService: MoviesService, private fireService: FirebaseService) {
    console.log('dataaaa');
    
    
    
    
    
  }


  ngOnInit(): void {

    
    this.getVideos();
    

    this.movieService.getFeature().subscribe( resp => {

      this.peliculasRecientes = resp.results;

    } );

    //sthis.getPopulares();
  }

  getVideos(){
    this.fireService.getVideos().then((resp: any[]) => {
      
      
      this.videosRecientes = resp
    })
    
    
  }

  

  cargarMas(){
    this.getPopulares();
  }

  getPopulares(){
    this.movieService.getPopulares().subscribe( resp => {

      const arrTemp = [...this.populares, ...resp.results];

      this.populares = arrTemp;

    } );
  }

}
