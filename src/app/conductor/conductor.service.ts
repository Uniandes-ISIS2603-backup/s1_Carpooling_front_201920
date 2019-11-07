import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Conductor } from './conductor';
import { Observable, from } from 'rxjs';
import { ConductorDetail } from './conductor-detail';
import {Calificacion} from './calificacion';

const API_URL = '../../assets/';
const conductores = 'conductores.json';
const calificaciones = '/calificaciones';

@Injectable()
export class ConductorService {

  constructor(private http: HttpClient) { }

  getConductores(): Observable<Conductor[]> {
    return this.http.get<Conductor[]>(API_URL + conductores);
  }
  
  getConductorDetail(conductorId): Observable<ConductorDetail>{
    return this.http.get<ConductorDetail>(API_URL + "conductor-"+conductorId+".json");
  }

  createCalificacion(conductorId, calificacion): Observable<Calificacion> {
    return this.http.post<Calificacion>(API_URL + conductores + '/' + conductorId + calificaciones, calificacion);
}
}