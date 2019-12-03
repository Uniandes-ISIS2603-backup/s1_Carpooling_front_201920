import { Component, OnInit, Input , EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViajeService } from '../viaje.service';
import { Viaje } from '../../../classes/viaje';
import { Trayecto } from '../../../classes/trayecto';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-viaje-add-trayecto',
  templateUrl: './viaje-add-trayecto.component.html',
  styleUrls: ['./viaje-add-trayecto.component.css']
})
export class ViajeAddTrayectoComponent implements OnInit {

  trayectoForm: FormGroup;

  @Input() idViaje:number;

  @Output() updateTrayectos = new EventEmitter();

  constructor(private viajeService: ViajeService,
    private formBuilder: FormBuilder
  ) {
    this.trayectoForm = this.formBuilder.group({
      origen: ["", Validators.required],
      destino: ["", Validators.required],
      costoCombustible: ["", Validators.required],
      duracion: ["", Validators.required],
      numPeajes: ["", Validators.required]
    });
  }


  postTrayecto(newTrayecto: Trayecto) {
    console.warn("Your order has been submitted", newTrayecto);
    this.viajeService.createTrayecto(this.idViaje, newTrayecto).subscribe(
      ()=>{
        this.trayectoForm.reset();
        this.updateTrayectos.emit();
      });
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
