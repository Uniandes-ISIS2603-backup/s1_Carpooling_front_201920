import { TipoDeDocumento } from './tipo-de-documento.enum';


export class Usuario {
  nombre: string;
  id: number;
  telefono: string;
  correo: string;
  contrasenha: string;
  tipoDocumento: TipoDeDocumento;
  numDocumento: string;
  fechaDeNacimiento: string;
}