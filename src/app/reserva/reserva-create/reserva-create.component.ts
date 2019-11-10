import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ReservaService } from "../reserva.service";
import { NgForm } from '@angular/forms';
import { ToastrService } from "ngx-toastr";
import { Reserva } from '../reserva';


@Component({
  selector: 'app-reserva-create',
  templateUrl: './reserva-create.component.html',
  styleUrls: ['./reserva-create.component.css']
})
export class ReservaCreateComponent implements OnInit {
reservaForm: FormGroup;

@Input() idViaje:number;

  constructor(
    private reservaService: ReservaService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.reservaForm = this.formBuilder.group({
      numeroDeReserva: [""],
      confirmacion: [""],
      fecha: [""],
      estado: [""]
    });
  }

  createReserva(newReserva: Reserva) {
    // Process checkout data here
    console.warn("el editoriale fue creado", newReserva);
    this.reservaService.createReserva(this.idViaje, newReserva).subscribe();
    this.reservaForm.reset();
  }

  ngOnInit() {
  }

}