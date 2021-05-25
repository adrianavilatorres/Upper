import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { DetalleComponent } from './detalle/detalle.component';
import { SlideshowPosterSimpleComponent } from './slideshow-poster-simple/slideshow-poster-simple.component';



@NgModule({

  entryComponents: [
    DetalleComponent,
  ],

  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    DetalleComponent,
    SlideshowPosterSimpleComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    DetalleComponent,
    SlideshowPosterSimpleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
