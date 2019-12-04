import { Viaje } from './viaje'
import { Calificacion } from './calificacion';
import { Trayecto } from './trayecto';
import { Reserva } from './reserva';


export class ViajeDetail extends Viaje{
  trayectos:Trayecto[];
  calificaciones:Calificacion[];
  reservas:Reserva[];
} 