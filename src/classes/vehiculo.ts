import { Conductor } from "./conductor";

export class Vehiculo{
    id:number;
    soat:string;
    placa: string;
    aseguradora: string;
    vigenciaSoat: string
    modelo: string;
    sillas: number;
    conductor: Conductor;
}