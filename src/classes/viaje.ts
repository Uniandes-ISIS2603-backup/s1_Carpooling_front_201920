
import { EstadoDeViaje } from "../enums/estado-de-viaje.enum";
import { Vehiculo } from "./vehiculo";
import {Conductor} from "./conductor"

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
    conductor: Conductor;
  } 