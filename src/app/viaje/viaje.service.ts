import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViajeDetail } from './viaje-detail';

const API_URL = '../../assets/';
const viajes = 'viajes.json';

@Injectable()
export class ViajeService {

  constructor(private http: HttpClient) { }

  getViajes(): Observable<ViajeDetail[]>{
    return this.http.get<ViajeDetail[]>(API_URL+viajes);
  }

}