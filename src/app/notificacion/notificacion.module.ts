import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionListComponent } from './notificacion-list/notificacion-list.component';
import { NotificacionService } from './notificacion.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotificacionListComponent],
  providers: [NotificacionService],
  exports: [NotificacionListComponent]
})
export class NotificacionModule { }