import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conductor } from './conductor';
import { ConductorDetail } from '../../classes/conductor-detail';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ViajeDetail } from '../../classes/viaje-detail';
import {Calificacion} from './calificacion';

import { HttpHeaders } from '@angular/common/http';
import { Viaje } from '../../classes/viaje';
import { Vehiculo } from './vehiculo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const API_URL = environment.apiURL;
const conductores = "/conductores";
const viajes = "/viajes";
const calificaciones = '/calificaciones';
const vehiculos = '/vehiculos';

 
@Injectable()
export class ConductorService {

 constructor(private http: HttpClient) { }

 getConductores(): Observable<Conductor[]>{
   return this.http.get<Conductor[]>(API_URL + conductores);
 }
 getConductorDetail(conductorId): Observable<ConductorDetail>{
   console.log(API_URL + "conductor-"+conductorId+".json");
   return this.http.get<ConductorDetail>(API_URL + conductores + "/"+conductorId);
 }
 createConductor(conductor, conductorId): Observable<ConductorDetail>{
   console.warn(API_URL + conductores);
   console.warn(conductor);
   return this.http.post<ConductorDetail>(API_URL + conductores,conductor, httpOptions);
 }

 createViaje(viaje:ViajeDetail, conductorId:number, vehiculoId:number): Observable<ViajeDetail>{
   return this.http.post<ViajeDetail>(API_URL+conductores+"/"+conductorId+viajes+"/"+vehiculoId, viaje)
 }

 createCalificacion(conductorId, calificacion): Observable<Calificacion> {
  return this.http.post<Calificacion>(API_URL + conductores + '/' + conductorId + calificaciones, calificacion);
}
createVehiculo(conductorId, vehiculo): Observable<Vehiculo> {
  return this.http.post<Vehiculo>(API_URL + vehiculos + '/' + conductorId + vehiculos, vehiculo);
}
}
