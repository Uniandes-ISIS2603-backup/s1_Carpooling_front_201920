/**
* This class represents an editorial of the BookStore. 
* It contains all the information relevant to the editorial.
*/
import { TIPODEDOCUMENTO } from './tipo-de-documento.enum';


export class Viajero {
    /**
    * The editorial's id
    */
    id: number;

    /**
    * The editorial's name
    */
    nombre: string;

        /**
    * The editorial's name
    */
    telefono: string;

        /**
    * The editorial's name
    */
    correo: string;

        /**
    * The editorial's name
    */
    numDocumento: string;

        /**
    * The editorial's name
    */
    contrasenha: string;

        /**
    * The editorial's name
    */
    fechaDeNacimiento: any;

        /**
    * The editorial's name
    */
    tipoDocumento: TIPODEDOCUMENTO;
  

}

