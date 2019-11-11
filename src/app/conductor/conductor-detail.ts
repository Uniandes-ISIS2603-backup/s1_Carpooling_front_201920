import { Conductor } from  './conductor'
import { Viaje } from '../viaje/viaje'
import { Vehiculo } from './vehiculo';

export class ConductorDetail extends Conductor{
    viajes: Viaje[];
    vehiculos: Vehiculo[];
}