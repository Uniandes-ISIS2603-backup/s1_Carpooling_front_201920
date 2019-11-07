import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViajeroDetailComponent } from './viajero-detail/viajero-detail.component';
import { ViajeroListComponent } from './viajero-list/viajero-list.component';
import { ViajeroService } from './viajero.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import {ViajeroCalificacionComponent} from './viajero-calificacion/viajero-calificacion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    ViajeroDetailComponent, 
    ViajeroListComponent, ViajeroCalificacionComponent],
    providers: [ViajeroService],
    exports:[ViajeroListComponent]
})
export class ViajeroModule { }
