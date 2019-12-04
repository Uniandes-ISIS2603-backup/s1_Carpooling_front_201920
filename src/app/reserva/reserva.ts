import { Viaje } from "../../classes/viaje";
import { Viajero } from "../viajero/viajero";

export class Reserva {
  id: number;
  viaje: Viaje;
  viajero: Viajero;
  numeroDeReserva: string;
  confirmacion: string;
  fecha: string;
  estado: string;

}