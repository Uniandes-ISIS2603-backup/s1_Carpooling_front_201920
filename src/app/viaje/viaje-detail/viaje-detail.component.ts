import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ViajeService } from '../viaje.service'
import { ViajeDetail } from '../../../classes/viaje-detail';

@Component({
  selector: 'app-viaje-detail',
  templateUrl: './viaje-detail.component.html',
  styleUrls: ['./viaje-detail.component.css']
})
export class ViajeDetailComponent implements OnInit {

  @Input() viajeId:number;

  viajeDetail: ViajeDetail;

  loader: any;

  constructor(
    private viajeService:ViajeService,
    private route: ActivatedRoute
  ) { 
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

  getViajeDetail():void {
    this.viajeService.getViajeDetail(this.viajeId).subscribe(viajeDetail=>{this.viajeDetail=viajeDetail});
  }
  
  ngOnDestroy() {
    this.loader.unsubscribe();
  }

  updateTrayectos():void{
    this.getViajeDetail();

  }

}