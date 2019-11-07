import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViajeListComponent } from './viaje-list/viaje-list.component';
import { ViajeService } from './viaje.service';
import { ViajeDetailComponent } from './viaje-detail/viaje-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ViajeTrayectosComponent } from './viaje-trayectos/viaje-trayectos.component';
import { ViajeAddTrayectoComponent } from './viaje-add-trayecto/viaje-add-trayecto.component'
import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ViajeListComponent, ViajeDetailComponent, ViajeTrayectosComponent, ViajeAddTrayectoComponent],
  exports:[ViajeListComponent, ViajeAddTrayectoComponent],
  providers: [ViajeService]
})
export class ViajeModule { } 