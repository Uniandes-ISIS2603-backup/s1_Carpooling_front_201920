import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PublicistaService } from '../publicista.service';
import { Publicista } from '../publicista';
import { PublicistaDetail } from '../publicista-detail';

@Component({
  selector: 'app-publicista-detail',
  templateUrl: './publicista-detail.component.html',
  styleUrls: ['./publicista-detail.component.css']
})
export class PublicistaDetailComponent implements OnInit {

 /**
  * The component's constructor
  * @param editorialService The editorial's service
  * @param route The route element which helps to obtain the editorial's id
  * @param toastrService The toastr to show messages to the user
  */
 constructor(
  private publicistaService: PublicistaService,
  private route: ActivatedRoute
) { }

/**
* The editorial whose details we want to show
*/
@Input() publicistaDetail: PublicistaDetail;



/**
* The editorial's id retrieved from the address
*/
publicista_id: number;





/**
* The method which initializes the component
* We need to initialize the editorial so it is never considered as undefined
*/
ngOnInit() {
  this.publicista_id = +this.route.snapshot.paramMap.get('id');
  if (this.publicista_id) {
    this.publicistaDetail = new PublicistaDetail();
  }

}
}
