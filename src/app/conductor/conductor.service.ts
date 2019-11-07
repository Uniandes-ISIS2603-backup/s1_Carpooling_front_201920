import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Conductor } from './conductor';
import { Observable, from } from 'rxjs';
import { ConductorDetail } from './conductor-detail';
import {Calificacion} from './calificacion';
import { Vehiculo } from './vehiculo';

const API_URL = '../../assets/';
const conductores = 'conductores.json';
const calificaciones = '/calificaciones';
const vehiculos = '/vehiculos';
@Injectable()
export class ConductorService {

  constructor(private http: HttpClient) { }

  getConductores(): Observable<Conductor[]> {
    return this.http.get<Conductor[]>(API_URL + conductores);
  }
  
  getConductorDetail(conductorId): Observable<ConductorDetail>{
    return this.http.get<ConductorDetail>(API_URL + "conductor-"+conductorId);
  }

  createConductor(conductor): Observable<ConductorDetail>{
    return this.http.post<ConductorDetail>(API_URL+conductores,conductor);
  }

  createCalificacion(conductorId, calificacion): Observable<Calificacion> {
    return this.http.post<Calificacion>(API_URL + conductores + '/' + conductorId + calificaciones, calificacion);
}

createVehiculo(conductorId, vehiculo): Observable<Vehiculo> {
  return this.http.post<Vehiculo>(API_URL + conductores + '/' + conductorId + vehiculos, vehiculo);
}
}