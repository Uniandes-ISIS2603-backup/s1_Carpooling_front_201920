import { Component, OnInit } from '@angular/core';
import { Conductor } from '../conductor';
import { ConductorDetail } from '../conductor-detail';
import { ConductorService } from '../conductor.service';
 
@Component({
  selector: 'app-conductor-lista',
  templateUrl: './conductor-lista.component.html',
  styleUrls: ['./conductor-lista.component.css']
})
export class ConductorListaComponent implements OnInit {
 
  constructor(private conductorService: ConductorService) { }

  conductor_id: number;
  selectedConductor: ConductorDetail;

  conductores: Conductor[];

  onSelected(conductor_id: number): void{
    this.conductor_id = conductor_id;
    this.selectedConductor = new ConductorDetail();
    this.conductorService.getConductorDetail(conductor_id).subscribe(o => this.selectedConductor = o);
  }

  getConductores(): void{
    this.conductorService.getConductores().subscribe(conductores => this.conductores = conductores);
  }

 

  ngOnInit() {
    this.getConductores();
  }

}