import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ViajeService } from '../viaje.service'
import { ViajeDetail } from '../viaje-detail';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Trayecto } from '../trayecto';

@Component({
  selector: 'app-viaje-detail',
  templateUrl: './viaje-detail.component.html',
  styleUrls: ['./viaje-detail.component.css']
})
export class ViajeDetailComponent implements OnInit {

  trayectoForm:FormGroup;

  constructor(
    private viajeService:ViajeService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { 
    this.trayectoForm=this.formBuilder.group({
      numPeajes: ["", Validators.required],
      duracion: ["", Validators.required],
      costoCombustible: ["", Validators.required],
      origen: ["", Validators.required],
      destino: ["", Validators.required]
    });
  }

  viajeDetail: ViajeDetail;

  @Input() viajeId:number;

  loader: any;

  getViajeDetail():void {
    this.viajeService.getViajeDetail(this.viajeId).subscribe(viajeDetail=>{this.viajeDetail=viajeDetail});
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  onLoad(params) {

    this.viajeId = parseInt(params['id']);
    console.log(" en detail " + this.viajeId);
    this.viajeDetail = new ViajeDetail();
    this.getViajeDetail();
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

  createTrayecto(newTrayecto: Trayecto) {
    // Process checkout data here
    console.warn("Your order has been submitted", newTrayecto);

   this.trayectoForm.reset();
  }

}