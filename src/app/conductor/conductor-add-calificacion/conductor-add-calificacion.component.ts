
import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Calificacion } from '../calificacion';
import { ConductorService } from '../conductor.service';
import { Conductor } from '../../conductor/conductor';
@Component({
  selector: 'app-conductor-add-calificacion',
  templateUrl: './conductor-add-calificacion.component.html',
  styleUrls: ['./conductor-add-calificacion.component.css']
})
export class ConductorAddCalificacionComponent implements OnInit, OnChanges  {

  constructor(private conductorService: ConductorService,
    private toastrService: ToastrService) 
    {
     }

     @Input() conductor: Conductor;

     calificacion : Calificacion;
     public isCollapsed = true;
    

     @Output() updateReviews = new EventEmitter();

     postCalificacion(calificacionForm: NgForm): Calificacion {
      this.calificacion.conductor = this.conductor;
      this.conductorService.createCalificacion(this.conductor.id,this.calificacion)
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
