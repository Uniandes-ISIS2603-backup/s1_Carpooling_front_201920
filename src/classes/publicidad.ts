import { Disponibilidad } from "src/enums/disponibilidad.enum";
import { Publicista } from "./publicista";

export class Publicidad{
    id:number;
    nombre:string;
    mensaje:string;
    costo:number;
    fechaDeInicio:string;
    fechaDeSalida:string;
    disponibilidad:Disponibilidad;
    publicista:Publicista;
}