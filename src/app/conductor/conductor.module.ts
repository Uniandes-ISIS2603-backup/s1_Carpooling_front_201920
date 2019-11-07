import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ConductorListComponent } from './conductor-list/conductor-list.component';
import { ConductorService } from './conductor.service';
import { HttpClientModule } from '@angular/common/http';
import { ConductorDetailComponent } from './conductor-detail/conductor-detail.component';
import { ConductorVehiculoComponent } from './conductor-vehiculo/conductor-vehiculo.component';
import { ConductorAddVehiculoComponent } from './conductor-add-vehiculo/conductor-add-vehiculo.component';
import { ConductorCalificacionComponent } from './conductor-calificacion/conductor-calificacion.component';
import { ConductorAddCalificacionComponent } from './conductor-add-calificacion/conductor-add-calificacion.component';
import { CreateConductorComponent } from './create-conductor/create-conductor.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [ConductorListComponent, ConductorDetailComponent, ConductorVehiculoComponent, ConductorAddVehiculoComponent, CreateConductorComponent, ConductorCalificacionComponent, ConductorAddCalificacionComponent],
  providers: [ConductorService]
})
export class ConductorModule { }