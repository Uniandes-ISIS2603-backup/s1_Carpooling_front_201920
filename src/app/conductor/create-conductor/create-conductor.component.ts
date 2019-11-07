import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConductorService } from '../conductor.service';
import { Conductor } from '../conductor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-conductor',
  templateUrl: './create-conductor.component.html',
  styleUrls: ['./create-conductor.component.css']
})
export class CreateConductorComponent implements OnInit {

  constructor(
    private conductorService: ConductorService,
    private router: Router,
    private toastrService: ToastrService

  ) { }

  conductor: Conductor;

  /*
    Cancela la creación de un libro
   */
  cancelCreation(): void{
    this.toastrService.warning('El conductor no fue creado','Creacion de conductor');
    this.router.navigate(['/conductores/list']);
  }

  /*
    Crea un nuevo conductor
  */
  createConductor(): Conductor{
    this.conductorService.createConductor(this.conductor).subscribe(elConductor => {this.conductor.id = elConductor.id; this.router.navigate(['/conductores/'+elConductor.id]);}, err =>  { this.toastrService.error(err, 'Error');});
    return this.conductor;
  }
  ngOnInit() {
    this.conductor=new Conductor();
    
  }

}