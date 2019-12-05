import { Component, OnInit, Input } from '@angular/core';
import { Trayecto } from '../../../classes/trayecto';

@Component({
  selector: 'app-viaje-trayectos',
  templateUrl: './viaje-trayectos.component.html',
  styleUrls: ['./viaje-trayectos.component.css']
})
export class ViajeTrayectosComponent implements OnInit {

  @Input() trayectos:Trayecto[];

  ngOnInit() {
  }

  updateTrayectos(trayectos:Trayecto[]): void {
    this.trayectos = trayectos
  }
  constructor() { }
}
