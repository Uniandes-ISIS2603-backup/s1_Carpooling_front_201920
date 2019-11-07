import { Conductor } from './conductor';
import { Calificacion } from './calificacion';
import { Vehiculo } from './vehiculo';
export class ConductorDetail  extends Conductor{
  
    calificaciones: Calificacion[];
    vehiculos: Vehiculo[];

}