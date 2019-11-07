
import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Vehiculo } from '../vehiculo';
import { ConductorService } from '../conductor.service';
import { Conductor } from '../../conductor/conductor';
@Component({
  selector: 'app-conductor-add-vehiculo',
  templateUrl: './conductor-add-vehiculo.component.html',
  styleUrls: ['./conductor-add-vehiculo.component.css']
})
export class ConductorAddVehiculoComponent implements OnInit, OnChanges  {

  constructor(private conductorService: ConductorService,
    private toastrService: ToastrService) 
    {
     }

     @Input() conductor: Conductor;

     vehiculo : Vehiculo;
     public isCollapsed = true;
    

     @Output() updateReviews = new EventEmitter();

     postVehiculo(vehiculoForm: NgForm): Vehiculo {
      this.vehiculo.conductor = this.conductor;
      this.conductorService.createVehiculo(this.conductor.id,this.vehiculo)
          .subscribe(() => {
              vehiculoForm.resetForm();
              this.updateReviews.emit();
              this.toastrService.success("The vehiculo was successfully created", 'Vehiculo added');
          }, err => {
              this.toastrService.error(err, 'Error');
          });
      return this.vehiculo;
  }

  ngOnInit() {
    this.vehiculo = new Vehiculo();
  }

  ngOnChanges() {
    this.ngOnInit();
}
} 
