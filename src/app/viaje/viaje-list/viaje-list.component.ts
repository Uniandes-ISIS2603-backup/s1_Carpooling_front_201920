import { Component, OnInit } from '@angular/core';
import { ViajeDetail } from '../../../classes/viaje-detail';
import { Viaje } from '../../../classes/viaje';
import { ViajeService } from '../viaje.service';

@Component({
  selector: 'viaje-list',
  templateUrl: './viaje-list.component.html',
  styleUrls: ['./viaje-list.component.css']
})
export class ViajeListComponent implements OnInit {

  viajes: Viaje[] = [];

  constructor(private viajeService:ViajeService) { }

  ngOnInit() {
    this.getViajes();
  } 

  getViajes():void{
    this.viajeService.getViajes().subscribe(viajes => this.viajes = viajes);
  }

  

}