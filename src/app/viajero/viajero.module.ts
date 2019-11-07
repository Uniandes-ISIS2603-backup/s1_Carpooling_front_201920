import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViajeroCalificacionComponent } from './viajero-calificacion/viajero-calificacion.component';
import { ViajeroAddCalificacionComponent } from './viajero-add-calificacion/viajero-add-calificacion.component';
import { ViajeroDetailComponent } from './viajero-detail/viajero-detail.component';
import { ViajeroListComponent } from './viajero-list/viajero-list.component';
import { ViajeroService } from './viajero.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ViajeroCalificacionComponent, 
    ViajeroAddCalificacionComponent, 
    ViajeroDetailComponent, 
    ViajeroListComponent],
    providers: [ViajeroService],
    exports:[ViajeroListComponent]
})
export class ViajeroModule { }
