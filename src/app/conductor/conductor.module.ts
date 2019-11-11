import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConductorService } from './conductor.service';
import { ConductorListaComponent } from './conductor-lista/conductor-lista.component';
import { ConductorDetailComponent } from './conductor-detail/conductor-detail.component';
import { ConductorCreateComponent } from './conductor-create/conductor-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConductorViajesComponent } from './conductor-viajes/conductor-viajes.component';
import { ConductorAddViajeComponent } from './conductor-add-viaje/conductor-add-viaje.component';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [ConductorListaComponent, ConductorDetailComponent, ConductorCreateComponent, ConductorViajesComponent, ConductorAddViajeComponent],
  providers: [ConductorService],
  exports: [ConductorListaComponent, ConductorCreateComponent, ReactiveFormsModule, FormsModule, ConductorAddViajeComponent ]
})
export class ConductorModule { }