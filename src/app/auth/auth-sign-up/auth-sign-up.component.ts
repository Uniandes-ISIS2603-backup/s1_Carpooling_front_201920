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
import {TipoDeDocumento} from '../../../enums/tipo-de-documento.enum';

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

    publicista  : Publicista;
    roles: string[];
    tipoDocumentos: string[];
    @Output() create = new EventEmitter();
    tipoPublicistas : string[];
  

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
             viajero.fechaDeNacimiento=  this.user.fechaDeNacimiento + 'T00:00:00-05:00';
             viajero.nombre = this.user.name;
             viajero.numDocumento = this.user.numDocumento;
             viajero.telefono = this.user.telefono;
             viajero.tipoDocumento = this.user.tipoDocumento;
             console.log(viajero.tipoDocumento);
             this.viajeroService.createViajero(viajero).subscribe((viajero) => {
                this.create.emit();
                this.toastrService.success("The viajero was created", "Viajero creation");
               
    
            });;
        }
        else if(this.user.role=='Conductor')
        {
            let conductor : Conductor;
             conductor = new Conductor;

             
            

             conductor.correo = this.user.correo;
             conductor.contrasenha = this.user.password;
             conductor.fechaDeNacimiento=  this.user.fechaDeNacimiento + 'T00:00:00-05:00';
             conductor.nombre = this.user.name;
             conductor.numDocumento = this.user.numDocumento;
             
             conductor.telefono = this.user.telefono;
             conductor.tipoDocumento = this.user.tipoDocumento;
             console.log(conductor.tipoDocumento);
            this.conductorService.createConductor(conductor, null).subscribe((conductor) => {
                this.create.emit();
                
                this.toastrService.success("The conductor was created", "Conductor creation");
              
               
            }
            );
            
            
            
        }
        else if(this.user.role=='Publicista')
        {
            let publicista : Publicista;
            publicista = new Publicista;
             publicista.correo = this.user.correo;
             publicista.contrasenha = this.user.password;
            publicista.apellido= this.publicista.apellido;
            publicista.cedula = this.user.numDocumento;
            publicista.nit=this.publicista.nit;
            publicista.rut = this.publicista.rut;
             publicista.nombre = this.user.name;
             publicista.tipoPublicista = this.publicista.tipoPublicista;
             
             publicista.telefono = this.user.telefono;
             
             this.publicistaService.createPublicista(publicista).subscribe((publicista) => {
                this.create.emit();
                
                this.toastrService.success("The publicista was created", "Publicista creation");
              
               
            }
            );
            ;
        }


            this.authService.login(this.user.role);
       
            this.toastrService.success('Successfully signed up')
       
       
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.publicista = new Publicista();
        this.roles = ['Publicista', 'Conductor', 'Viajero'];
        this.tipoDocumentos= ["CEDULA_DE_CIUDADANA","CEDULA_DE_EXTRANJERIA","TARJETA_DE_IDENTIDAD","PASAPORTE"];
        this.tipoPublicistas = ["PERSONA_NATURAL_CON_EMPRESA", "EMPRESA"];
    }
}
