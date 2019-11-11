import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ViajeroService } from '../viajero.service';
import { Viajero } from '../viajero';
import { ViajeroDetail } from '../viajero-detail';
import {ViajeroCalificacionComponent} from '../viajero-calificacion/viajero-calificacion.component';
import {ViajeroAddCalificacionComponent} from '../viajero-add-calificacion/viajero-add-calificacion.component';

@Component({
  selector: 'app-viajero-detail',
  templateUrl: './viajero-detail.component.html',
  styleUrls: ['./viajero-detail.component.css']
})
export class ViajeroDetailComponent implements OnInit {

  /**
  * The component's constructor
  * @param editorialService The editorial's service
  * @param route The route element which helps to obtain the editorial's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private viajeroService: ViajeroService,
    private route: ActivatedRoute
  ) { }

  /**
  * The editorial whose details we want to show
  */
  @Input() viajeroDetail: ViajeroDetail;
  crearCalificacion = false;

  /**
  * The editorial's id retrieved from the address
  */
  viajero_id: number;

  @ViewChild(ViajeroCalificacionComponent) calificacionListComponent: ViajeroCalificacionComponent;
  @ViewChild(ViajeroAddCalificacionComponent) calificacionAddComponent: ViajeroAddCalificacionComponent;
  

  ActivarCrearCalificacion() : void{
    this.crearCalificacion = true;
  }
  DesactivarCrearCalificacion():void{
    this.crearCalificacion = false;
  }
  
  toggleCalificaciones(): void {
    if (this.calificacionAddComponent.isCollapsed == false) {
        this.calificacionAddComponent.isCollapsed = true;
    }
    this.calificacionListComponent.isCollapsed = !this.calificacionListComponent.isCollapsed;
}

toggleCreateCalificacion(): void {
  if (this.calificacionListComponent.isCollapsed == false) {
      this.calificacionListComponent.isCollapsed = true;
  }
  this.calificacionAddComponent.isCollapsed = !this.calificacionAddComponent.isCollapsed;
}




  /**
  * The method which retrieves the viajeros of an editorial
  */
  getViajeroDetail(): void {
    this.viajeroService.getViajeroDetail(this.viajero_id)
      .subscribe(viajeroDetail => {
        this.viajeroDetail = viajeroDetail
      });
  }

  updateCalificaciones(): void {
    this.getViajeroDetail();
    this.calificacionListComponent.updateCalificaciones(this.viajeroDetail.calificaciones);
    this.calificacionListComponent.isCollapsed = false;
    this.calificacionAddComponent.isCollapsed = true;
}

  /**
  * The method which initializes the component
  * We need to initialize the editorial so it is never considered as undefined
  */
  ngOnInit() {
    this.viajero_id = +this.route.snapshot.paramMap.get('id');
    if (this.viajero_id) {
      this.viajeroDetail = new ViajeroDetail();
      this.getViajeroDetail();
    }

  }
}