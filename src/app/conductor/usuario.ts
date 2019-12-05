import { TIPODEDOCUMENTO } from '../../enums/tipo-de-documento.enum'


export class Usuario {
  nombre: string;
  id: number;
  telefono: string;
  correo: string;
  contrasenha: string;
  tipoDocumento: TIPODEDOCUMENTO;
  numDocumento: string;
  fechaDeNacimiento: string;
  otraFecha: string;

  ponerOtraFecha(): void{
    this.otraFecha = this.fechaDeNacimiento.split("T")[0];
  }
}