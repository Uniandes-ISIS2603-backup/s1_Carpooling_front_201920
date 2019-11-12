import { Viaje } from "../viaje/viaje";
import { Viajero } from "../viajero/viajero";

export class Reserva {
  id: number;
  numeroDeReserva: String;
  confirmacion: String;
  fecha: String;
  estado: String;
  viaje: Viaje;
  viajero: Viajero;

}