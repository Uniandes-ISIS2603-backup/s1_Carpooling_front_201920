import { Component, OnInit } from '@angular/core';
import { ViajeDetail } from '../viaje-detail';
import { ViajeService } from '../viaje.service';

@Component({
  selector: 'viaje-list',
  templateUrl: './viaje-list.component.html',
  styleUrls: ['./viaje-list.component.css']
})
export class ViajeListComponent implements OnInit {

  viajes: ViajeDetail[] = [];

  constructor(private viajeService:ViajeService) { }

  ngOnInit() {
    this.getViajes();
  } 

  getViajes():void{
    this.viajeService.getViajes().subscribe(viajes => this.viajes = viajes);
  }

  

}