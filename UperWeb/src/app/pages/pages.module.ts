import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ErrorComponent } from './error/error.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { RatingModule } from 'ng-starrating';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RatingModule,
    YouTubePlayerModule
  ]
})
export class PagesModule { }
