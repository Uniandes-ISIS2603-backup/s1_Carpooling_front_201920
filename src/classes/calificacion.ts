import { Viaje } from './viaje';
import { Conductor } from './conductor';
import { Viajero } from './viajero';

export class Calificacion{
    id:number;
    puntuacion:number;
    comentarios:string;
    viajero:Viajero
    conductor:Conductor;
    viaje:Viaje;
}