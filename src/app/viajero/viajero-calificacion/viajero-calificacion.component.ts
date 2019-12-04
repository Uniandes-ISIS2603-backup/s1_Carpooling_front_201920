import { Component, OnInit, Input, } from '@angular/core';
import { Calificacion } from '../calificacion';


@Component({
  selector: 'app-viajero-calificacion',
  templateUrl: './viajero-calificacion.component.html',
})
export class ViajeroCalificacionComponent implements OnInit {
  @Input() viajeroCalificaciones : Calificacion [];
  public isCollapsed = false;
  public hasViaje = false;
  calficacionActual: Calificacion;
  destino : string;
  fecha : string;
  onSelected(calificacionActual: Calificacion): void{
    this.cambioDetalle();
    this.calficacionActual = calificacionActual;
    if(calificacionActual.viaje != null)
    {
      this.hasViaje = true;
      this.destino = calificacionActual.viaje.destino;
      this.fecha = calificacionActual.viaje.fechaDeLlegada
    }
   
    
  }
  mostrarDetalle: boolean = false;



  cambioDetalle(): void {
    this.mostrarDetalle = !this.mostrarDetalle;
  }

  updateCalificaciones(calificaciones:Calificacion[]): void {
    this.viajeroCalificaciones = calificaciones;
}


  ngOnInit() {
  }

}
