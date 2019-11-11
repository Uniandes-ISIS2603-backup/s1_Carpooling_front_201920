
import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Calificacion } from '../calificacion';
import { ConductorService } from '../conductor.service';
import { Conductor } from '../../conductor/conductor';
@Component({
  selector: 'app-conductor-add-calificacion',
  templateUrl: './conductor-add-calificacion.component.html',
  styleUrls: ['./conductor-add-calificacion.component.css']
})
export class ConductorAddCalificacionComponent implements OnInit  {

  calificacionForm: FormGroup;
  @Input() idConductor: number;
  @Output() updateCalificaciones = new EventEmitter();

  constructor(private conductorService: ConductorService,
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

      this.conductorService.createCalificacion(this.idConductor,newCalificacion)
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
