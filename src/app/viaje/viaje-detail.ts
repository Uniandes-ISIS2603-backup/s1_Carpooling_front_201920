import { Viaje } from './viaje'
import { Reserva } from '../reserva/reserva';
import { Calificacion } from './calificacion';
import { Trayecto } from './trayecto';


export class ViajeDetail extends Viaje{
  trayectos:Trayecto[];
  calificaciones:Calificacion[];
  reservas:Reserva[];
} 