
import { EstadoDeViaje } from "../enums/estado-de-viaje.enum";
import { Vehiculo } from "./vehiculo";

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