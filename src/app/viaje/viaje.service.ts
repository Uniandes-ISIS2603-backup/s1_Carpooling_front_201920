import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViajeDetail } from './viaje-detail';
import { Viaje } from './viaje';

const API_URL = '../../assets/';
const viajes = 'viajes.json';

@Injectable()
export class ViajeService {

  constructor(private http: HttpClient) { }

  getViajes(): Observable<Viaje[]>{
    return this.http.get<Viaje[]>(API_URL+viajes);
  }

  getViajeDetail(viajeId:number):Observable<ViajeDetail>{
    console.log("Toy devolviendo el Detail");
    return this.http.get<ViajeDetail>(API_URL + "viaje-" + viajeId+".json");
  }

}