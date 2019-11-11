import { Component, OnInit, Input } from '@angular/core';
import { Trayecto } from '../trayecto';

@Component({
  selector: 'app-viaje-trayectos',
  templateUrl: './viaje-trayectos.component.html',
  styleUrls: ['./viaje-trayectos.component.css']
})
export class ViajeTrayectosComponent implements OnInit {
  @Input() viajeTrayectos : Trayecto [];

  public isCollapsed = false;

  updateReviews(trayectos:Trayecto[]): void {
    this.viajeTrayectos = trayectos;
}

  constructor() { }

  ngOnInit() {
  }

}
