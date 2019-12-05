import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { PublicidadService } from '../publicidad.service';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { Publicidad } from 'src/classes/publicidad';

@Component({
  selector: 'app-publicidad-list',
  templateUrl: './publicidad-list.component.html',
  styleUrls: ['./publicidad-list.component.css']
})
export class PublicidadListComponent implements OnInit {

 /**
    * Constructor for the component
    * @param publicidadService The author's services provider
    */
   constructor(
    private publicidadService: PublicidadService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) {}


/**
* The list of publicidades which belong to the PublicistaStore
*/
publicidades: Publicidad[];

/**
* Shows or hides the create component
*/
showCreate: boolean;

/**
 * Shows or hides the edit component.
 */
showEdit: boolean;

/**
 * The id of the publicidad being edited.
 */
publicidad_edit_id: number;

/**
* Asks the service to update the list of publicidades
*/
getPublicidades(): void {
    this.publicidadService.getPublicidades()
        .subscribe(publicidades => {
            this.publicidades = publicidades;
        });
}

/**
* Shows or hides the create component
*/
showHideCreate(): void {
    this.showEdit = false;
    this.showCreate = !this.showCreate!
}

/**
* Shows or hides the create component
*/
showHideEdit(publicidad_id: number): void {
    if (!this.showEdit || (this.showEdit && publicidad_id != this.publicidad_edit_id)) {
        this.showCreate = false;
        this.showEdit = true;
        this.publicidad_edit_id = publicidad_id;
    }
    else {
        this.showEdit = false;
    }
}

updatePublicidad(): void {
    this.showEdit = false;
}

/**
* Deletes an publicidad
*/
deletePublicidad(publicidadId): void {
    this.modalDialogService.openDialog(this.viewRef, {
        title: 'Delete an publicidad',
        childComponent: SimpleModalComponent,
        data: {text: 'Are you sure your want to delete this publicidad from the PublicistaStore?'},
        actionButtons: [
            {
                text: 'Yes',
                buttonClass: 'btn btn-danger',
                onAction: () => {
                    this.publicidadService.deletePublicidad(publicidadId).subscribe(() => {
                        this.toastrService.error("The publicidad was successfully deleted", "Publicidad deleted");
                        this.ngOnInit();
                    }, err => {
                        this.toastrService.error(err, "Error");
                    });
                    return true;
                }
            },
            {text: 'No', onAction: () => true}
        ]
    });
}



/**
* This will initialize the component by retrieving the list of publicidades from the service
* This method will be called when the component is created
*/
ngOnInit() {
    this.showCreate = false;
    this.showEdit = false;
    this.getPublicidades();
}

}
