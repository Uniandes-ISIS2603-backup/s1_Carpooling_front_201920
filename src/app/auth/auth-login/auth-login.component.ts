import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';

import { User } from '../user';

import { ToastrService } from 'ngx-toastr';
import { ConductorService } from '../../conductor/conductor.service';
import { PublicistaService } from '../../publicista/publicista.service';
import { ViajeroService } from '../../viajero/viajero.service';

import { Publicista } from '../../publicista/publicista';
import { Viajero } from '../../viajero/viajero';
import { Conductor } from '../../conductor/conductor';


@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
        private conductorService: ConductorService,
        private publicistaService: PublicistaService,
        private viajeroService: ViajeroService
    ) { }

    user: User;

    roles: string[];

    publicistas: Publicista[];

    viajeros: Viajero[];

    conductores: Conductor[];

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        let varId:number, encontrado:boolean;
        if(this.user.role == "Viajero"){
            
        }
        else if(this.user.role == "Conductor"){
            for(let conductor of this.conductores){
                if(conductor.correo == this.user.name && conductor.contrasenha == this.user.password){
                    varId = conductor.id;
                    encontrado = true;
                }
            }
        }
        else if(this.user.role == "Publicista"){
            for(let publicista of this.publicistas){
                
            }
        }
        else{

        }
        if(encontrado){
            this.authService.login(this.user.role);
            this.authService.setId(varId);
            this.toastrService.success('Logged in');
        }
        else{
            this.toastrService.error('Username or password is wrong');
        }

        
        
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.roles = ['Publicista','Conductor','Viajero', 'GUEST'];
        this.publicistaService.getPublicistas().subscribe(publicistas => this.publicistas = publicistas);
        this.conductorService.getConductores().subscribe(conductores => this.conductores = conductores);
        this.viajeroService.getViajeros().subscribe(viajeros => this.viajeros = viajeros);
    }

}
