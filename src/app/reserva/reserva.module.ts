import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaDetailComponent } from './reserva-detail/reserva-detail.component';
import { FormsModule } from '@angular/forms';
import { ReservaService } from './reserva.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ReservaCreateComponent } from './reserva-create/reserva-create.component';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
   AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [ReservaListComponent, ReservaDetailComponent], 
  exports: [ReservaListComponent, ReservaDetailComponent ],
  providers: [ ReservaService]
})
export class ReservaModule { }