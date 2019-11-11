
import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Calificacion } from '../calificacion';
import { ConductorService } from '../conductor.service';
import { Conductor } from '../../conductor/conductor';
import { Viaje } from '../../viaje/viaje';
import { ViajeService } from '../../viaje/viaje.service';
@Component({
  selector: 'app-conductor-add-calificacion',
  templateUrl: './conductor-add-calificacion.component.html',
  styleUrls: ['./conductor-add-calificacion.component.css']
})
export class ConductorAddCalificacionComponent implements OnInit  {

  calificacionForm: FormGroup;
  @Input() idConductor: number;
  @Output() updateCalificaciones = new EventEmitter();
  viaje :Viaje;
  viajes : Viaje[];
  tieneViaje = false;

  constructor(private conductorService: ConductorService,
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
      this.conductorService.createCalificacion(this.idConductor,newCalificacion)
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
