import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConductorService } from '../conductor.service';
import { ViajeDetail } from '../../../classes/viaje-detail';
import { EstadoDeViaje} from '../../../enums/estado-de-viaje.enum';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Vehiculo } from '../../../classes/vehiculo'
import { ConductorDetail } from '../../../classes/conductor-detail';

@Component({
  selector: 'app-conductor-add-viaje',
  templateUrl: './conductor-add-viaje.component.html',
  styleUrls: ['./conductor-add-viaje.component.css']
})
export class ConductorAddViajeComponent implements OnInit {

  viajeForm: FormGroup;

  @Input() conductorId: number;

  conductor: ConductorDetail;

  loader:any;

  constructor(private conductorService: ConductorService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router) {
    this.viajeForm = this.formBuilder.group({
      origen: ["", Validators.required],
      destino: ["", Validators.required],
      fechaDeSalida: ["", Validators.required],
      fechaDeLlegada: ["", Validators.required],
      cupos: ["", Validators.required],
      costoViaje: ["", Validators.required],
      vehiculo: ["",Validators.required]
    });
    console.log(this.conductorId)
  }

  postViaje(newViaje: ViajeDetail):void{
    newViaje.estadoViaje=EstadoDeViaje.PUBLICADO;
    newViaje.fechaDeLlegada = newViaje.fechaDeLlegada + "T00:00:00-05:00";
    newViaje.fechaDeSalida = newViaje.fechaDeSalida + "T00:00:00-05:00";
    this.conductorService.createViaje(newViaje, this.conductorId, newViaje.vehiculo.id).subscribe(
      ()=>{
        this.viajeForm.reset();
        this.router.navigateByUrl('/conductores/'+this.conductorId);
        this.toastrService.success("El viaje fue creado.", "Creacion viaje");
      }, err => {
        this.toastrService.error(err, 'Error');
      });
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
    this.conductor = new ConductorDetail();
    this.conductorService.getConductorDetail(this.conductorId).subscribe(conductorDetail => {this.conductor = conductorDetail});
  
  }

  onLoad(params) {
    this.conductorId = parseInt(params['idConductor']);
    }

}
