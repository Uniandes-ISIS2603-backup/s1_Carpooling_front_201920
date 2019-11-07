import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ConductorListComponent } from './conductor-list/conductor-list.component';
import { ConductorService } from './conductor.service';
import { HttpClientModule } from '@angular/common/http';
import { ConductorDetailComponent } from './conductor-detail/conductor-detail.component';
import { ConductorVehiculoComponent } from './conductor-vehiculo/conductor-vehiculo.component';
import { ConductorAddVehiculoComponent } from './conductor-add-vehiculo/conductor-add-vehiculo.component';
import { CreateConductorComponent } from './create-conductor/create-conductor.component';
import { ViajeRecurrenteComponent } from './viaje-recurrente/viaje-recurrente.component';
import { ConductorViajeRecurrenteComponent } from './conductor-viaje-recurrente/conductor-viaje-recurrente.component';
import { ConductorAddViajeRecurrenteComponent } from './conductor-add-viaje-recurrente/conductor-add-viaje-recurrente.component';
import { ConductorViajeRecurrenteDetailComponent } from './conductor-viaje-recurrente-detail/conductor-viaje-recurrente-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [ConductorListComponent, ConductorDetailComponent, ConductorVehiculoComponent, ConductorAddVehiculoComponent, CreateConductorComponent, ViajeRecurrenteComponent, ConductorViajeRecurrenteComponent, ConductorAddViajeRecurrenteComponent, ConductorViajeRecurrenteDetailComponent],
  providers: [ConductorService]
})
export class ConductorModule { }