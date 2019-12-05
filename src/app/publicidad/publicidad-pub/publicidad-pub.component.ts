import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {PublicidadService} from '../publicidad.service';
import {PublicidadDetail} from '../../../classes/publicidad-detail';

@Component({
  selector: 'app-publicidad-pub',
  templateUrl: './publicidad-pub.component.html',
  styleUrls: ['./publicidad-pub.component.css']
})
export class PublicidadPubComponent implements OnInit {

 /**
    * The component's constructor
    * @param publicidadService The publicidad's service
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private publicidadService: PublicidadService,
    private toastrService: ToastrService
) {}

/**
* The id of the publicidad that the user wants to edit
* This is passed as a parameter by the parent component
*/
@Input() publicidad_id: number;

/**
* The output which tells the parent component
* that the user no longer wants to create an publicidad
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user updated a new publicidad
*/
@Output() update = new EventEmitter();

/**
* The publicidad to edit
*/
publicidad: PublicidadDetail;

/**
* Retrieves the information of the publicidad
*/
getPublicidad(): void {
    this.publicidadService.getPublicidadDetail(this.publicidad_id)
        .subscribe(publicidad => {
            this.publicidad = publicidad;
        });
}

/**
* Updates the publicidad's information
*/
editPublicidad(): void {
    this.publicidadService.updatePublicidad(this.publicidad)
        .subscribe(() => {
            this.update.emit();
            this.toastrService.success("The publicidad's information was updated", "Publicidad edition");
        });
}

/**
* Informs the parent component that the user no longer wants to update the publicidad
*/
cancelEdition(): void {
    this.cancel.emit();
}

/**
* The function which initializes the component
*/
ngOnInit() {
    this.publicidad = new PublicidadDetail();
    this.getPublicidad();
}

/**
* The function which is called every time the user chooses to edit a different publicidad
*/
ngOnChanges() {
    this.ngOnInit();
}
}
