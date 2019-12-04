import { Conductor} from './conductor'
import { Viaje } from '../../classes/viaje';

export class Calificacion{
    id:number;
    puntuacion:number;
    comentarios:string;
    conductor: Conductor;
    viaje:Viaje;
}