import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../auth.service';
import { User } from '../user';
import {ConductorService} from '../../conductor/conductor.service'
import {ViajeroService} from '../../viajero/viajero.service'
import {PublicistaService} from '../../publicista/publicista.service'
import {Conductor} from '../../conductor/conductor'
import {Viajero} from '../../viajero/viajero'
import {Publicista} from '../../publicista/publicista'
import { TIPODEDOCUMENTO } from 'src/enums/tipo-de-documento.enum';

@Component({
    selector: 'app-auth-sign-up',
    templateUrl: './auth-sign-up.component.html',
    styleUrls: ['./auth-sign-up.component.css']
})
export class AuthSignUpComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
        private viajeroService: ViajeroService,
        private conductorService: ConductorService,
        private publicistaService: PublicistaService,
    ) { }

    user: User;
    esPublicista : boolean;
    roles: string[];
    tipoDocumentos: string[];

    /**
    * Sign the user up with the selected role
    */
    signUp(): void {

        if(this.user.role=='Viajero')
        {
            let viajero : Viajero;
            viajero = new Viajero; 
             viajero.contrasenha = this.user.password;
             viajero.correo = this.user.correo;
             viajero.fechaDeNacimiento = this.user.fechaDeNacimiento;
             viajero.nombre = this.user.name;
             viajero.numDocumento = this.user.numDocumento;
             viajero.telefono = this.user.telefono;
             viajero.tipoDocumento = this.user.tipoDocumento;
           
             this.viajeroService.createViajero(viajero);
        }
        else if(this.user.role=='Conductor')
        {
            let conductor : Conductor;
             conductor = new Conductor;
             conductor.correo = this.user.correo;
             conductor.contrasenha = this.user.password;
             conductor.fechaDeNacimiento = this.user.fechaDeNacimiento;
             conductor.nombre = this.user.name;
             conductor.numDocumento = this.user.numDocumento;
             conductor.telefono = this.user.telefono;
             conductor.tipoDocumento = this.user.tipoDocumento;
            this.conductorService.createConductor(conductor, null);
        }
        else if(this.user.role=='Publicista')
        {
            let publicista : Publicista;
             publicista.correo = this.user.correo;
             publicista.contrasenha = this.user.password;
            publicista.apellido= '';
            publicista.cedula = '';
            publicista.nit= '';
            publicista.rut = '';
             publicista.nombre = this.user.name;
             
             publicista.telefono = this.user.telefono;
             
             this.publicistaService.createPublicista(publicista);
        }
        this.authService.login(this.user.role);
       

        this.toastrService.success('Successfully signed up')
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.roles = ['Publicista', 'Conductor', 'Viajero'];
        this.tipoDocumentos= ["CEDULA_DE_CIUDADANA","CEDULA_DE_EXTRANJAERIA","TARJETA_DE_IDENTIDAD","PASAPORTE"];
    }
}
