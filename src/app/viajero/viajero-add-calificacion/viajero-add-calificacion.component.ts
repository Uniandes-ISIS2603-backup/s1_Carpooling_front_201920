
import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Calificacion } from '../calificacion';
import { ViajeroService } from '../viajero.service';
import { Viajero } from '../../viajero/viajero';
@Component({
  selector: 'app-viajero-add-calificacion',
  templateUrl: './viajero-add-calificacion.component.html',
  styleUrls: ['./viajero-add-calificacion.component.css']
})
export class ViajeroAddCalificacionComponent implements OnInit, OnChanges  {

  constructor(private viajeroService: ViajeroService,
    private toastrService: ToastrService) 
    {
     }

     @Input() viajero: Viajero;

     calificacion : Calificacion;
     public isCollapsed = true;
    

     @Output() updateReviews = new EventEmitter();

     postCalificacion(calificacionForm: NgForm): Calificacion {
      this.calificacion.viajero = this.viajero;
      this.viajeroService.createCalificacion(this.viajero.id,this.calificacion)
          .subscribe(() => {
              calificacionForm.resetForm();
              this.updateReviews.emit();
              this.toastrService.success("The calificacion was successfully created", 'Calificacion added');
          }, err => {
              this.toastrService.error(err, 'Error');
          });
      return this.calificacion;
  }

  ngOnInit() {
    this.calificacion = new Calificacion();
  }

  ngOnChanges() {
    this.ngOnInit();
}
} 
