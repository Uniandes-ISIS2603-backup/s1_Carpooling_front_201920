import { Component, OnInit } from '@angular/core';
import { Reserva } from '../reserva';
import { ReservaService } from "../reserva.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',
  styleUrls: ['./reserva-list.component.css']
})
export class ReservaListComponent implements OnInit {

    constructor(private reservaService:ReservaService, private router: Router,
  ) { }

  reservas: Reserva[];

    getReservas(){
    this.reservaService.getReservas().subscribe(reservas => this.reservas = reservas);
    //this.poder = 5;
    console.log("hola");
    console.log(this.reservas);

    }

  ngOnInit() {
    this.getReservas();
  }

}