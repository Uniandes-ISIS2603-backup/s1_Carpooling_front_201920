
import {Viajero} from "./viajero";
import {Calificacion} from "./calificacion";
import { Reserva } from "./reserva";
import { Notificacion } from "./notificacion";

export class ViajeroDetail extends Viajero{
  reservas:Reserva[];
  calificaciones : Calificacion[];
  notificaciones:Notificacion[];

}