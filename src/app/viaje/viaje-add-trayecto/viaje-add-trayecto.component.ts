import { Component, OnInit, Input } from '@angular/core';
import { ViajeService } from '../viaje.service';
import { Trayecto } from '../../../classes/trayecto';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viaje-add-trayecto',
  templateUrl: './viaje-add-trayecto.component.html',
  styleUrls: ['./viaje-add-trayecto.component.css']
})
export class ViajeAddTrayectoComponent implements OnInit {

  trayectoForm: FormGroup;

  loader: any;

  @Input() idViaje: number;

  constructor(private viajeService: ViajeService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
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
      () => {
        this.trayectoForm.reset();
        this.router.navigateByUrl('/viajes/' + this.idViaje);
        this.toastrService.success("El trayecto fue creado.", "Creacion trayecto");
      }, err => {
        this.toastrService.error(err, 'Error');
      });
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  onLoad(params) {
    this.idViaje = parseInt(params['idViaje']);
  }


  ngOnChanges() {
  }

}
