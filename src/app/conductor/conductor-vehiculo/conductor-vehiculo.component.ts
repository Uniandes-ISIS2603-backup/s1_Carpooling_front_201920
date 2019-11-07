import { Component, OnInit, Input, } from '@angular/core';
import { Vehiculo } from '../vehiculo';


@Component({
  selector: 'app-conductor-vehiculo',
  templateUrl: './conductor-vehiculo.component.html',
  styleUrls: ['./conductor-vehiculo.component.css']
})
export class ConductorVehiculoComponent implements OnInit {
  @Input() conductorVehiculos : Vehiculo [];
  public isCollapsed = false;
  updateVehiculos(vehiculos:Vehiculo[]): void {
    this.conductorVehiculos = vehiculos;
}


  ngOnInit() {
  }

}
