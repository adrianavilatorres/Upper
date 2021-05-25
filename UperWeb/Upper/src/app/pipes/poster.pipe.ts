import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(poster: string): string {

    if(poster){
      //https://image.tmdb.org/t/p/w50{{movie.poster_path}}
      return `https://image.db.org/t/p/w500${poster}`;
    }else{
      return '.assets/img/no-image.jpg'
    }
  }

}
