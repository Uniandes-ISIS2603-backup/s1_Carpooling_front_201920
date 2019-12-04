import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Vehiculo } from '../vehiculo';
import { ConductorService } from '../conductor.service';
import { Viaje } from '../../../classes/viaje';
import { ViajeDetail } from '../../../classes/viaje-detail';
import { EstadoDeViaje} from '../../../enums/estado-de-viaje.enum';

@Component({
  selector: 'app-conductor-add-viaje',
  templateUrl: './conductor-add-viaje.component.html',
  styleUrls: ['./conductor-add-viaje.component.css']
})
export class ConductorAddViajeComponent implements OnInit {

  viajeForm: FormGroup;

  @Input() conductorId: number;

  @Input() vehiculos: Vehiculo[];

  @Output() updateViajes = new EventEmitter();

  constructor(private conductorService: ConductorService,
    private formBuilder: FormBuilder) {
    this.viajeForm = this.formBuilder.group({
      origen: ["", Validators.required],
      destino: ["", Validators.required],
      fechaDeSalida: ["", Validators.required],
      fechaDeLlegada: ["", Validators.required],
      cupos: ["", Validators.required],
      costoViaje: ["", Validators.required],
      vehiculo: ["",]
    });
    console.log(this.conductorId)
  }

  postViaje(newViaje: ViajeDetail):void{
    newViaje.estadoViaje=EstadoDeViaje.PUBLICADO;
    this.conductorService.createViaje(newViaje, this.conductorId, newViaje.vehiculo.id).subscribe(
      ()=>{
        this.viajeForm.reset();
        this.updateViajes.emit();
      });
  }

  ngOnInit() {
  }

}
