import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conductor } from '../conductor';
import { ConductorService } from '../conductor.service';

@Component({
  selector: 'app-conductor-list',
  templateUrl: './conductor-list.component.html',
  styleUrls: ['./conductor-list.component.css']
})
export class ConductorListComponent implements OnInit {

  constructor(private service : ConductorService) { }
  conductores: Conductor[];

  getConductores() : void {
    this.service.getConductores().subscribe(elConductor => this.conductores = elConductor); 
  }
  ngOnInit() {
    this.getConductores();
  }

}