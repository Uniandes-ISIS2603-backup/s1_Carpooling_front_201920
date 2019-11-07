import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViajeroCalificacionComponent } from './viajero-calificacion/viajero-calificacion.component';
import { ViajeroAddCalificacionComponent } from './viajero-add-calificacion/viajero-add-calificacion.component';
import { ViajeroDetailComponent } from './viajero-detail/viajero-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViajeroCalificacionComponent, ViajeroAddCalificacionComponent, ViajeroDetailComponent]
})
export class ViajeroModule { }
