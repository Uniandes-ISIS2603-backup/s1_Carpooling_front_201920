import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Publicista } from '../publicista';
import { PublicistaDetailComponent } from '../publicista-detail/publicista-detail.component';
import { PublicistaDetail } from '../publicista-detail';
import { PublicistaService } from '../publicista.service';

@Component({
  selector: 'list-publicista',
  templateUrl: './publicista-list.component.html',
  styleUrls: ['./publicista-list.component.css']
})
export class PublicistaListComponent implements OnInit {

 /**
   * Constructor for the component
   * @param editorialService The author's services provider
   */
  constructor(private publicistaService: PublicistaService, private router: Router) { }


  publicista_id: number;
  selectedPublicista: PublicistaDetail;
  /**
   * The list of editorials which belong to the BookStore
   */
  publicistas: Publicista[];

      /**
    * Shows or hides the author-create-component
    */
   showCreate: boolean;




  onSelected(publicista_id: number): void {
    this.showCreate = false;
    this.publicista_id = publicista_id;
    this.selectedPublicista = new PublicistaDetail();
  }

    /**
    * Shows or hides the create component
    */
   showHideCreate(): void {
    this.showCreate = !this.showCreate;
}

  /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.showCreate = false;
  }

}
