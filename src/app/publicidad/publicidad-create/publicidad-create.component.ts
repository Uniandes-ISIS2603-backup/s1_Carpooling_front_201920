

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PublicidadService } from '../publicidad.service';
import { ToastrService } from 'ngx-toastr';
import { Publicidad } from 'src/classes/publicidad';
@Component({
    selector: 'app-publicidad-create',
    templateUrl: './publicidad-create.component.html',
    styleUrls: ['./publicidad-create.component.css']
})
export class PublicidadCreateComponent implements OnInit {
    /**
        * Constructor for the component
        * @param publicidadService The publicidades' services provider
        * @param toastrService The toastr to show messages to the user
        */
    constructor(private publicidadService: PublicidadService, private toastrService: ToastrService) { }
    /**
    * The new publicidad
    */
    publicidad: Publicidad;
    /**
    * The output which tells the parent component
    * that the user no longer wants to create an publicidad
    */
    @Output()
    cancel = new EventEmitter();
    /**
    * The output which tells the parent component
    * that the user created a new publicidad
    */
    @Output()
    create = new EventEmitter();
    /**
    * Creates a new publicidad
    */
    createPublicidad(): Publicidad {
        this.publicidadService.createPublicidad(this.publicidad)
            .subscribe((publicidad) => {
                this.publicidad = publicidad;
                this.create.emit();
                this.toastrService.success("The publicidad was created", "Publicidad creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.publicidad;
    }
    /**
    * Informs the parent component that the user no longer wants to create an publicidad
    */
    cancelCreation(): void {
        this.cancel.emit();
    }
    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.publicidad = new Publicidad();
    }
}
