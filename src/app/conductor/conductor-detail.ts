import { Conductor } from  './conductor'
import { Viaje } from '../viaje/viaje'
import { Vehiculo } from './vehiculo';
import { Calificacion } from './calificacion';

export class ConductorDetail extends Conductor{
    viajes: Viaje[];
    vehiculos: Vehiculo[];
    calificaciones : Calificacion[];
}