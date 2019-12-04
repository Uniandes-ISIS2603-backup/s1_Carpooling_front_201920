import { Publicista } from "./publicista";
import { Disponibilidad } from "../enums/disponibilidad.enum";

export class Publicidad{
    id:number;
    nombre:string;
    mensaje:string;
    costo:number;
    fechaDeInicio:string;
    fechaDeSalida:string;
    disponibilidad:Disponibilidad
    publicista:Publicista;
}