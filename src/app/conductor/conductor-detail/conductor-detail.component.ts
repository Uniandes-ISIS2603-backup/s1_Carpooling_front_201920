import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConductorService } from '../conductor.service';
import { Conductor } from '../conductor';
import { ConductorDetail } from '../conductor-detail';

@Component({
  selector: 'app-conductor-detail',
  templateUrl: './conductor-detail.component.html',
  styleUrls: ['./conductor-detail.component.css']
})
export class ConductorDetailComponent implements OnInit {

  constructor(
    private conductorService: ConductorService,
    private route: ActivatedRoute
  ) { }

  conductorDetail: ConductorDetail;

  conductor_id: string;

  getConductorDetail(): void {
    this.conductorService.getConductorDetail(this.conductor_id).subscribe(elDetalle => {this.conductorDetail = elDetalle});
  }

  ngOnInit() {
    this.conductor_id=""+this.route.snapshot.paramMap.get('id');
    this.conductorDetail = new ConductorDetail();
    this.getConductorDetail();
  }

}