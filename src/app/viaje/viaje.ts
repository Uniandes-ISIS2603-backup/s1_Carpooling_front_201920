import { Vehiculo } from "../conductor/vehiculo";
import { EstadoDeViaje } from "./estado-de-viaje.enum";

export class Viaje {
    id: number;
    destino: string;
    origen: string;
    fechaDeSalida: string;
    fechaDeLlegada: string;
    cupos: number;
    costoViaje: number;
    estadoViaje: EstadoDeViaje;
    vehiculo: Vehiculo;
  } 