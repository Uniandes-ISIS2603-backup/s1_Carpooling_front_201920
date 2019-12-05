import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConductorService } from './conductor.service';
import { ConductorListaComponent } from './conductor-lista/conductor-lista.component';
import { ConductorDetailComponent } from './conductor-detail/conductor-detail.component';
import { ConductorCreateComponent } from './conductor-create/conductor-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConductorViajesComponent } from './conductor-viajes/conductor-viajes.component';
import { ConductorAddViajeComponent } from './conductor-add-viaje/conductor-add-viaje.component';
import {ConductorCalificacionComponent} from './conductor-calificacion/conductor-calificacion.component';
import {ConductorAddCalificacionComponent} from './conductor-add-calificacion/conductor-add-calificacion.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViajeModule } from '../viaje/viaje.module';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    NgbModule, 
    ViajeModule,
    AppRoutingModule
  ],
  declarations: [ConductorListaComponent, ConductorDetailComponent, ConductorCreateComponent, ConductorViajesComponent, ConductorAddViajeComponent, ConductorCalificacionComponent,
    ConductorAddCalificacionComponent],
  providers: [ConductorService],
  exports: [ConductorListaComponent, ConductorCreateComponent, ReactiveFormsModule, FormsModule, ConductorAddViajeComponent, ConductorAddCalificacionComponent]
})
export class ConductorModule { }