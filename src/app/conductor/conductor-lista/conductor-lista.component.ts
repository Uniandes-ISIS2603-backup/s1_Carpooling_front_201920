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
    this.cambioDetalle();
    this.conductor_id = conductor_id;
    this.selectedConductor = new ConductorDetail();
    this.conductorService.getConductorDetail(conductor_id).subscribe(o => this.selectedConductor = o);
  }

  getConductores(): void{
    this.conductorService.getConductores().subscribe(conductores => this.conductores = conductores);
  }

  mostrarDetalle: boolean = false;
  mostrarForm: boolean = false;

  mostrarFormulario(): void{
    console.log("mostrar form es: "+this.mostrarForm);
    this.mostrarForm = true;
    console.log("mostrar form es: "+this.mostrarForm);
  }
  ocultarFormulario(): void{
    this.mostrarForm = false;
    console.log("mostrar form es: "+this.mostrarForm);
  }

  cambioDetalle(): void {
    this.mostrarDetalle = !this.mostrarDetalle;
  }

  ngOnInit() {
    this.getConductores();
  }

}