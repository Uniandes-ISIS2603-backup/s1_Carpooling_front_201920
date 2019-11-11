
import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Calificacion } from '../calificacion';
import { ViajeroService } from '../viajero.service';
import { Viajero } from '../../viajero/viajero';
@Component({
  selector: 'app-viajero-add-calificacion',
  templateUrl: './viajero-add-calificacion.component.html',
  styleUrls: ['./viajero-add-calificacion.component.css']
})
export class ViajeroAddCalificacionComponent implements OnInit  {

  calificacionForm: FormGroup;
  @Input() idViajero: number;
  @Output() updateCalificaciones = new EventEmitter();

  constructor(private viajeroService: ViajeroService,
   private formBuilder: FormBuilder) 
    {
      this.calificacionForm = this.formBuilder.group({
        puntuacion: ["", Validators.required],
        comentarios: ["", Validators.required],
     });
    }

    isCollapsed = false;
     postCalificacion(newCalificacion: Calificacion) {
      console.warn("Your order has been submitted", newCalificacion);

      this.viajeroService.createCalificacion(this.idViajero,newCalificacion)
          .subscribe(() => {
              this.calificacionForm.reset();
              this.updateCalificaciones.emit();
          });
      
  }

  ngOnInit() {
    
  }

  ngOnChanges() {
   
}
}
