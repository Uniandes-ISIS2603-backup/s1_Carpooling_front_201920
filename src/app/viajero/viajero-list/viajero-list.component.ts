import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Viajero } from '../viajero';
import { ViajeroDetailComponent } from '../viajero-detail/viajero-detail.component';
import { ViajeroDetail } from '../viajero-detail';
import { ViajeroService } from '../viajero.service';

/**
 * The component for the list of editorials in the BookStore
 */
@Component({
  selector: 'list-viajero',
  templateUrl: './viajero-list.component.html',
})
export class ViajeroListComponent implements OnInit {

  /**
   * Constructor for the component
   * @param editorialService The author's services provider
   */
  constructor(private viajeroService: ViajeroService, private router: Router) { }


  viajero_id: number;
  selectedViajero: ViajeroDetail;
  /**
   * The list of editorials which belong to the BookStore
   */
  viajeros: Viajero[];

  /**
   * Asks the service to update the list of editorials
   */
  getViajeros(): void {
    this.viajeroService.getViajeros().subscribe(viajeros => this.viajeros = viajeros);
  }



  onSelected(viajero_id: number): void {
    this.viajero_id = viajero_id;
    this.selectedViajero = new ViajeroDetail();
    this.viajeroService.getViajeroDetail(viajero_id).subscribe(o => this.selectedViajero = o);
  }

  /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
  this.getViajeros();
  }
}