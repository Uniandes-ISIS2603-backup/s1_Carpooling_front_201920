import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ViajeService } from '../viaje.service'
import { Viaje } from '../viaje';
import { ViajeDetail } from '../viaje-detail';

@Component({
  selector: 'app-viaje-detail',
  templateUrl: './viaje-detail.component.html',
  styleUrls: ['./viaje-detail.component.css']
})
export class ViajeDetailComponent implements OnInit {

  constructor(
    private viajeService:ViajeService,
    private route: ActivatedRoute
  ) { }

  viajeDetail: ViajeDetail;

  @Input() viajeId:number;

  loader: any;

  getViajeDetail():void {
    this.viajeService.getViajeDetail(this.viajeId).subscribe(viajeDetail=>{this.viajeDetail=viajeDetail});
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  onLoad(params) {

    this.viajeId = parseInt(params['id']);
    console.log(" en detail " + this.viajeId);
    this.viajeDetail = new ViajeDetail();
    this.getViajeDetail();
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}