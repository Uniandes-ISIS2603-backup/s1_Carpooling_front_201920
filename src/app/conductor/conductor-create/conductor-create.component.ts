import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { ConductorService } from "../conductor.service";
import { Conductor } from "../conductor";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-conductor-create",
  templateUrl: "./conductor-create.component.html",
  styleUrls: ["./conductor-create.component.css"]
})
export class ConductorCreateComponent implements OnInit {
  conductorForm: FormGroup;
  constructor(
    private conductorService: ConductorService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.conductorForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      telefono: ["", [Validators.required, Validators.minLength(7)]],
      numDocumento: ["", [Validators.required, Validators.minLength(7)]],
      tipoDocumento: ["", [Validators.required]],
      correo: ["", [Validators.required]],
      contrasenha: ["", [Validators.required]
      ]
    
    });
  }
  elConductor: Conductor;
  createConductor(nuevoConductor: Conductor): void {
    console.warn("Se agrega el conductor", nuevoConductor);
    this.elConductor.id = null;
    this.elConductor.nombre = nuevoConductor.nombre;
    this.elConductor.telefono = nuevoConductor.telefono;
    this.elConductor.correo = nuevoConductor.correo;
    this.elConductor.contrasenha = nuevoConductor.contrasenha;
    this.elConductor.numDocumento = nuevoConductor.numDocumento;
    this.elConductor.fechaDeNacimiento = "1970-11-03T00:00:00-05:00";
    this.elConductor.tipoDocumento = nuevoConductor.tipoDocumento;
    console.warn("Se agrega el conductor", this.elConductor);
    this.conductorService
      .createConductor(this.elConductor, this.elConductor.id)
      .subscribe(cond => {
        console.warn(cond);
        //this.elConductor.id = cond.id;
        //this.router.navigate(["/conductores/" + cond.id]);
      });
    this.conductorForm.reset();
  }
  ngOnInit() {
    this.elConductor = new Conductor();
  }
}
