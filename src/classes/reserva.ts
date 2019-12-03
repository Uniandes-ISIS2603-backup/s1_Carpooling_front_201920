import { Viaje } from "./viaje";
import { Viajero } from "./viajero";

export class Reserva {
  id: number;
  viaje: Viaje;
  viajero: Viajero;
  numeroDeReserva: string;
  confirmacion: string;
  fecha: string;
  estado: string;

}