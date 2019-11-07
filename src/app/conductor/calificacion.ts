import { Conductor} from './conductor'
import { Viaje } from '../viaje/viaje';

export class Calificacion{
    id:number;
    puntuacion:number;
    comentarios:string;
    conductor: Conductor;
    viaje:Viaje;
    idViaje:number;
}