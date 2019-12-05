import { Publicidad } from './publicidad';
import { Publicista } from './publicista';
/**
* This class represents an editorialDetail of the BookStore. 
* It contains all the information relevant to the editorial.
*/
export class PublicidadDetail extends Publicidad {


    /**
     * The editorial's books
     */
    publicistas: Publicista[];
}