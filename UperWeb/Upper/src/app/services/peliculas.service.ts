import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera.response';
import { catchError, map, tap } from 'rxjs/operators';
import { MovieResponse } from '../interfaces/movie-response';
import { CreditResponse } from '../interfaces/credits-response';
import { VideoResponse } from '../interfaces/video-response';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean = false;

  constructor( private http: HttpClient ) { }

  resetCarteleraPage(){
    this.carteleraPage = 1;
  }

  get params(){
    return{
      api_key: 'a006fa0a9c711ced717a0db4670c86f0',
      language: 'es-ES',
      page: this.carteleraPage.toString()
    }
  }

  getCartelera(): Observable<CarteleraResponse>{

    if(this.cargando){
      return;
    }

    this.cargando = true;

    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`, {
      params: this.params
    }).pipe(
      tap( ()=>{
        this.carteleraPage += 1;
        this.cargando = false;
      } )
    )
  }

  buscarPeliculas(texto: string): Observable<Movie[]>{

    const params = {...this.params, page:'1', query: texto};

    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`,{
      params
    }).pipe(map(resp => resp.results))

  }

  getPeliculaDetail(id: string){
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${id}`,{
      params: this.params
    }).pipe(
      catchError( err => of(null) )
    )
  }

  getCast(id: string){
    return this.http.get<CreditResponse>(`${this.baseUrl}/movie/${id}/credits`,{
      params: this.params
    }).pipe(
      map(resp => resp.cast),
      catchError( err => of([])),
    );
  }

  getVideoPelicula(id: string){
    return this.http.get<VideoResponse>(`${this.baseUrl}/movie/${id}/videos`,{
      params: this.params
    }).pipe(
      catchError( err => of(null) )
    )
  }




}
