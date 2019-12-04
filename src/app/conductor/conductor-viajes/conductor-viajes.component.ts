import { Component, OnInit, Input } from '@angular/core';
import { Viaje } from '../../../classes/viaje'

@Component({
  selector: 'app-conductor-viajes',
  templateUrl: './conductor-viajes.component.html',
  styleUrls: ['./conductor-viajes.component.css']
})
export class ConductorViajesComponent implements OnInit {

  @Input() conductorViajes: Viaje[];

  updateViajes(viajes:Viaje[]):void{
    this.conductorViajes=viajes;
  }

  constructor() { }

  ngOnInit() {
  }

}
