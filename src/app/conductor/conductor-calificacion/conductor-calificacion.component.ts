import { Component, OnInit, Input, } from '@angular/core';
import { Calificacion } from '../calificacion';


@Component({
  selector: 'app-conductor-calificacion',
  templateUrl: './conductor-calificacion.component.html',
  styleUrls: ['./conductor-calificacion.component.css']
})
export class ConductorCalificacionComponent implements OnInit {
  @Input() conductorCalificaciones : Calificacion [];
  public isCollapsed = false;
  updateCalificaciones(calificaciones:Calificacion[]): void {
    this.conductorCalificaciones = calificaciones;
}


  ngOnInit() {
  }

}
