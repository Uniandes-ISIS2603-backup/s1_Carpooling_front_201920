import { Viajero} from './viajero'
import { Viaje } from '../viaje/viaje';

export class Calificacion{
    id:number;
    puntuacion:number;
    comentarios:string;
    viajero: Viajero;
    viaje:Viaje;
}