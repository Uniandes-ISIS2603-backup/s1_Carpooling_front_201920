import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViajeDetail } from '../../classes/viaje-detail';
import { Viaje } from '../../classes/viaje';
import {environment} from '../../environments/environment';
import { Trayecto } from '../../classes/trayecto';

const API_URL = environment.apiURL;
const viajes = '/viajes';

@Injectable()
export class ViajeService {

  constructor(private http: HttpClient) { }

  getViajes(): Observable<Viaje[]>{
    return this.http.get<Viaje[]>(API_URL+viajes);
  }

  getViajeDetail(viajeId:number):Observable<ViajeDetail>{
    return this.http.get<ViajeDetail>(API_URL + viajes + "/" +viajeId);
  }

  createTrayecto(viajeId, trayecto): Observable<Trayecto> {
    return this.http.post<Trayecto>(API_URL + viajes + '/' + viajeId + "/trayectos", trayecto);
}

}