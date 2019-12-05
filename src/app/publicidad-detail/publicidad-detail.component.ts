import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PublicidadService } from '../publicidad/publicidad.service';
import { Publicidad } from '../../classes/publicidad';
import { PublicidadDetail } from '../../classes/publicidad-detail';

@Component({
  selector: 'app-publicidad-detail',
  templateUrl: './publicidad-detail.component.html',
  styleUrls: ['./publicidad-detail.component.css']
})
export class PublicidadDetailComponent implements OnInit {

 /**
    * The component's constructor
    * @param publicidadService The publicidad's service
    * @param route The route element which helps to obtain the publicidad's id
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private publicidadService: PublicidadService,
    private route: ActivatedRoute
) { }

/**
* The publicidad whose details we want to show
*/
publicidadDetail: PublicidadDetail;



/**
* The publicidad's id retrieved from the address
*/
publicidad_id: number;

/**
* The method which retrieves the books of an publicidad
*/
getPublicidadDetail(): void {
    this.publicidadService.getPublicidadDetail(this.publicidad_id)
        .subscribe(publicidadDetail => {
            this.publicidadDetail = publicidadDetail
        });
}

/**
* The method which initializes the component
* We need to initialize the publicidad so it is never considered as undefined
*/
ngOnInit() {
    this.publicidad_id = +this.route.snapshot.paramMap.get('id');
    this.publicidadDetail = new PublicidadDetail();
    this.getPublicidadDetail();
}

}
