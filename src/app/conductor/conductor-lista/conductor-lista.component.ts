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

  conductores: Conductor[];

  mostrarForm: boolean = false;
 
  constructor(private conductorService: ConductorService) { }

  ngOnInit() {
    this.getConductores();
    this.ajustarFechas();
  }

  getConductores(): void{
    this.conductorService.getConductores().subscribe(conductores => this.conductores = conductores);
  }
  
  ajustarFechas(): void{
    for(const conductor of this.conductores){
      conductor.ponerOtraFecha();
    }
  }

  mostrarFormulario(): void{
    console.log("mostrar form es: "+this.mostrarForm);
    this.mostrarForm = true;
    console.log("mostrar form es: "+this.mostrarForm);
  }
  
  ocultarFormulario(): void{
    this.mostrarForm = false;
    console.log("mostrar form es: "+this.mostrarForm);
  }
}