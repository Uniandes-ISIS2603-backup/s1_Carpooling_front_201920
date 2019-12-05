import { TipoDeDocumento } from '../enums/tipo-de-documento.enum';


export class Usuario {
  nombre: string;
  id: number;
  telefono: string;
  correo: string;
  contrasenha: string;
  tipoDocumento: TipoDeDocumento;
  numDocumento: string;
  fechaDeNacimiento: string;
  otraFecha: string;

  ponerOtraFecha(): void{
    this.otraFecha = this.fechaDeNacimiento.split("T")[0];
  }
}