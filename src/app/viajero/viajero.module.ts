import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ViajeroDetailComponent } from './viajero-detail/viajero-detail.component';
import { ViajeroListComponent } from './viajero-list/viajero-list.component';
import { ViajeroService } from './viajero.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import {ViajeroCalificacionComponent} from './viajero-calificacion/viajero-calificacion.component';
import {ViajeroAddCalificacionComponent} from './viajero-add-calificacion/viajero-add-calificacion.component'
import { ViajeroCreateComponent } from './viajero-create/viajero-create.component';
import { ViajeModule } from '../viaje/viaje.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ViajeModule,
    NgbModule
  ],
  declarations: [ 
    ViajeroDetailComponent, 
    ViajeroListComponent, ViajeroCalificacionComponent,
    ViajeroAddCalificacionComponent,
    ViajeroCreateComponent],
    providers: [ViajeroService],
    exports:[ViajeroListComponent, ViajeroAddCalificacionComponent]
})
export class ViajeroModule { }
