import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Viajero } from './viajero';
import { ViajeroDetail } from './viajero-detail';
import { Observable } from 'rxjs';
import {Calificacion} from './calificacion';

const API_URL = "../../assets/";
const viajeros = 'viajeros';
const calificaciones = 'calificaciones';
/**
* The service provider for everything related to editorials
*/
@Injectable({
  providedIn: 'root'
})
export class ViajeroService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    

    getViajeros() : Observable<Viajero[]> {
        return this.http.get<Viajero[]>(API_URL + viajeros);
    }

     /**
    * Returns the Observable object containing the editorial retrieved from the API
    * @returns The editorial
    */
    getViajeroDetail(viajeroId): Observable<ViajeroDetail> {
      console.log(viajeroId+" "+API_URL + "viajero-" + viajeroId+".json");
        return this.http.get<ViajeroDetail>(API_URL + "viajero-" + viajeroId+".json");
    }
    
    createCalificacion(viajeroId, calificacion): Observable<Calificacion> {
      return this.http.post<Calificacion>(API_URL + viajeros + '/' + viajeroId + calificaciones, calificacion);
    }
    
}