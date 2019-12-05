/**
* This class represents a user of s1_carpooling-Front.
* It contains all the information relevant to the user.
*/
import { TIPODEDOCUMENTO } from '../../enums/tipo-de-documento.enum'

export class User {
    /**
    * The user's name
    */
    name: string;
    telefono: string;
    correo: string;
    tipoDocumento: TIPODEDOCUMENTO;
    fechaDeNacimiento: string;
    numDocumento : string;

    
    /**
    * The user's password
    */
    password: string;

    /**
    * The user's role
    */
    role: string;
}
