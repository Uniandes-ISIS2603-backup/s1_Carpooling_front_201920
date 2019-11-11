import { OnInit, OnChanges, Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConductorService } from '../conductor.service';
import { ConductorDetail } from '../conductor-detail';
import { Conductor } from '../conductor';
import { ConductorViajesComponent } from '../conductor-viajes/conductor-viajes.component';


@Component({
  selector: 'app-conductor-detail',
  templateUrl: './conductor-detail.component.html',
  styleUrls: ['./conductor-detail.component.css']
})
export class ConductorDetailComponent implements OnInit {
  
  @Input() conductorDetail: ConductorDetail;

  public isCollapsed = true;
  
  @ViewChild(ConductorViajesComponent) conductorViajesComponent: ConductorViajesComponent;

  constructor(
    private route: ActivatedRoute,
    private conductorService: ConductorService
  ) { }

  conductor_id: number;

  getConductorDetail(): void{
    this.conductorService.getConductorDetail(this.conductorDetail.id).subscribe(conductorDetail => {this.conductorDetail = conductorDetail});
  }

  updateViajes():void{
    this.getConductorDetail();
    this.conductorViajesComponent.updateViajes(this.conductorDetail.viajes);
  }

  ngOnInit() {
    this.conductorDetail = new ConductorDetail();
  }

}