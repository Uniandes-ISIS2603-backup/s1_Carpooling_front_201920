import { Component, OnInit, Input, } from '@angular/core';
import { Calificacion } from '../calificacion';


@Component({
  selector: 'app-viajero-calificacion',
  templateUrl: './viajero-calificacion.component.html',
})
export class ViajeroCalificacionComponent implements OnInit {
  @Input() viajeroCalificaciones : Calificacion [];
  public isCollapsed = false;
  updateCalificaciones(calificaciones:Calificacion[]): void {
    this.viajeroCalificaciones = calificaciones;
}


  ngOnInit() {
  }

}
