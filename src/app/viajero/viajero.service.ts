import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Viajero } from './viajero';
import { Observable, from } from 'rxjs';
import {Calificacion} from './calificacion';

const API_URL = '../../assets/';
const viajeros = '/viajeros';
const calificaciones = '/calificaciones';

@Injectable({
  providedIn: 'root'
})
export class ViajeroService {

  constructor(private http: HttpClient) { }

  createCalificacion(viajeroId, calificacion): Observable<Calificacion> {
    return this.http.post<Calificacion>(API_URL + viajeros + '/' + viajeroId + calificaciones, calificacion);
}

}
