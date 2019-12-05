import { OnInit, OnChanges, Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ConductorService } from '../conductor.service';
import { ConductorDetail } from '../conductor-detail';
import { ConductorViajesComponent } from '../conductor-viajes/conductor-viajes.component';
import {ConductorCalificacionComponent} from '../conductor-calificacion/conductor-calificacion.component';
import {ConductorAddCalificacionComponent} from '../conductor-add-calificacion/conductor-add-calificacion.component';

@Component({
  selector: 'app-conductor-detail',
  templateUrl: './conductor-detail.component.html',
  styleUrls: ['./conductor-detail.component.css']
})
export class ConductorDetailComponent implements OnInit {

  @Input() conductorId:number;
  
  conductorDetail: ConductorDetail;

  loader: any;

  crearCalificacion = false;

  public isCollapsed = true;
  
  @ViewChild(ConductorViajesComponent) conductorViajesComponent: ConductorViajesComponent;
  @ViewChild(ConductorCalificacionComponent) calificacionListComponent: ConductorCalificacionComponent;
  @ViewChild(ConductorAddCalificacionComponent) calificacionAddComponent: ConductorAddCalificacionComponent;
  constructor(
    private route: ActivatedRoute,
    private conductorService: ConductorService
  ) { }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  rolViajero(): boolean
{
  return "VIAJERO"==localStorage.getItem('role');
}


rolConductor(): boolean
{
  return "CONDUCTOR"==localStorage.getItem('role');
}


  onLoad(params) {
    this.conductorId = parseInt(params['id']);
    this.conductorDetail = new ConductorDetail();
    this.getConductorDetail();
  }

  getConductorDetail(): void{
    this.conductorService.getConductorDetail(this.conductorId).subscribe(conductorDetail => {this.conductorDetail = conductorDetail});
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

  ActivarCrearCalificacion() : void{
    this.crearCalificacion = true;
  }
  DesactivarCrearCalificacion():void{
    this.crearCalificacion = false;
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


}