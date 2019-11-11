import { OnInit, OnChanges, Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConductorService } from '../conductor.service';
import { ConductorDetail } from '../conductor-detail';
import { Conductor } from '../conductor';
import { ConductorViajesComponent } from '../conductor-viajes/conductor-viajes.component';

import {ConductorCalificacionComponent} from '../conductor-calificacion/conductor-calificacion.component';
import {ConductorAddCalificacionComponent} from '../conductor-add-calificacion/conductor-add-calificacion.component';

@Component({
  selector: 'app-conductor-detail',
  templateUrl: './conductor-detail.component.html',
  styleUrls: ['./conductor-detail.component.css']
})
export class ConductorDetailComponent implements OnInit {
  
  @Input() conductorDetail: ConductorDetail;

  crearCalificacion = false;

  public isCollapsed = true;
  
  @ViewChild(ConductorViajesComponent) conductorViajesComponent: ConductorViajesComponent;
  @ViewChild(ConductorCalificacionComponent) calificacionListComponent: ConductorCalificacionComponent;
  @ViewChild(ConductorAddCalificacionComponent) calificacionAddComponent: ConductorAddCalificacionComponent;
  constructor(
    private route: ActivatedRoute,
    private conductorService: ConductorService
  ) { }

  conductor_id: number;

  ActivarCrearCalificacion() : void{
    this.crearCalificacion = true;
  }
  DesactivarCrearCalificacion():void{
    this.crearCalificacion = false;
  }
  getConductorDetail(): void{
    this.conductorService.getConductorDetail(this.conductorDetail.id).subscribe(conductorDetail => {this.conductorDetail = conductorDetail});
  }

  updateViajes():void{
    this.getConductorDetail();
    this.conductorViajesComponent.updateViajes(this.conductorDetail.viajes);
  }

  updateCalificaciones(): void {
    this.getConductorDetail();
    this.calificacionListComponent.updateCalificaciones(this.conductorDetail.calificaciones);
    this.calificacionListComponent.isCollapsed = false;
    this.calificacionAddComponent.isCollapsed = true;
}

  ngOnInit() {
    this.conductorDetail = new ConductorDetail();
  }

}