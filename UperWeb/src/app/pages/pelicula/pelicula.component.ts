import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/interfaces/credits-response';
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { Result, VideoResponse } from 'src/app/interfaces/video-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula: MovieResponse;
  public videoPlayer: VideoResponse;
  public cast: Cast[] = [];
  public results: Result[] = []

  constructor( private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService, private location: Location, private router: Router) { }

  ngOnInit(): void {

    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    const id = this.activatedRoute.snapshot.params.id;

    this.peliculasService.getPeliculaDetail(id).subscribe(movie => {
      //console.log(movie)
      if (!movie) {
        this.router.navigateByUrl('/home')
        return;
      }
      this.pelicula = movie;
    });

    this.peliculasService.getVideoPelicula(id).subscribe(video => {

      this.videoPlayer = video;
    })

    this.peliculasService.getCast(id).subscribe(cast =>{
      this.cast = cast;
    });

  }

  volver(){
    this.location.back()
  }

}
