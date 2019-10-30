import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViajeListComponent } from './viaje-list/viaje-list.component';
import { ViajeService } from './viaje.service';
import { ViajeDetailComponent } from './viaje-detail/viaje-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [ViajeListComponent, ViajeDetailComponent],
  exports:[ViajeListComponent],
  providers: [ViajeService]
})
export class ViajeModule { } 