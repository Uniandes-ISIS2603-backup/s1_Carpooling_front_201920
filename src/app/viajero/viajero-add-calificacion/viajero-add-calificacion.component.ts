
import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Calificacion } from '../calificacion';
import { ViajeroService } from '../viajero.service';
import { Viajero } from '../../viajero/viajero';
import { Viaje } from '../../viaje/viaje';
import { ViajeService } from '../../viaje/viaje.service';
@Component({
  selector: 'app-viajero-add-calificacion',
  templateUrl: './viajero-add-calificacion.component.html',
  styleUrls: ['./viajero-add-calificacion.component.css']
})
export class ViajeroAddCalificacionComponent implements OnInit  {

  calificacionForm: FormGroup;
  @Input() idViajero: number;
  @Output() updateCalificaciones = new EventEmitter();
  viaje :Viaje;
  viajes : Viaje[];
  tieneViaje = false;

  constructor(private viajeroService: ViajeroService,
   private formBuilder: FormBuilder, viajeService: ViajeService) 
    {
      viajeService.getViajes().subscribe(viajes => this.viajes = viajes);
      this.calificacionForm = this.formBuilder.group({
        puntuacion: ["", Validators.required],
        comentarios: ["", Validators.required],
     });
    }

    isCollapsed = false;

    seleccionarViaje( viaje:Viaje)
    {
      this.viaje = viaje;
      this.tieneViaje = true;
    }



     postCalificacion(newCalificacion: Calificacion) {
      console.warn("Your order has been submitted", newCalificacion);
      newCalificacion.viaje = this.viaje;
      this.viajeroService.createCalificacion(this.idViajero,newCalificacion)
          .subscribe(() => {
              this.calificacionForm.reset();
              this.updateCalificaciones.emit();
          });
          this.viaje = null;
          this.tieneViaje = false;
      
  }

  ngOnInit() {
    
  }

  ngOnChanges() {
   
}
}
