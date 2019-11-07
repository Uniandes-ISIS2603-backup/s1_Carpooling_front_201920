import { TipoDeDocumento } from './tipo-de-documento.enum';
export class Usuario {
  nombre: string;
  id: string;
  elefono: string;
  correo: string;
  contrasenha: string;
  tipoDocumento: TipoDeDocumento;

}