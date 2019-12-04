import { Conductor } from  './conductor'
import { Viaje } from './viaje'
import { Vehiculo } from './vehiculo';
import { Calificacion } from './calificacion';
import { ViajeRecurrente } from './viaje-recurrente';
import { Notificacion } from './notificacion';

export class ConductorDetail extends Conductor{
    viajes: Viaje[];
    vehiculos: Vehiculo[];
    viajesReucrrentes: ViajeRecurrente[];
    notificaciones:Notificacion[];
    calificaciones : Calificacion[];
}