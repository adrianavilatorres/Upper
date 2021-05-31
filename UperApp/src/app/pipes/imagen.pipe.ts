import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.imgPath;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string): string {

    if(!img){
      return './assets/no-image-banner.jpg';
    }

    



    return img;
  }

}
