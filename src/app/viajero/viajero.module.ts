import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViajeroCalificacionComponent } from './viajero-calificacion/viajero-calificacion.component';
import { ViajeroAddCalificacionComponent } from './viajero-add-calificacion/viajero-add-calificacion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViajeroCalificacionComponent, ViajeroAddCalificacionComponent]
})
export class ViajeroModule { }
