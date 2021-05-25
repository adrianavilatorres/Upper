import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { PeliculaDetalle } from '../Interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  peliculas: PeliculaDetalle[] = [];

  constructor( private dataLocalService: DataLocalService, private modalCtrl: ModalController ) {}


  async ngOnInit() {
    this.peliculas = await this.dataLocalService.cargarFavoritos();
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
