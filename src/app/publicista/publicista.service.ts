import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publicista } from './publicista';
import { PublicistaDetail } from './publicista-detail';
import { Observable } from 'rxjs';

import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const publicistas = '/publicistas';
@Injectable({
  providedIn: 'root'
})
export class PublicistaService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
    

   getPublicistas() : Observable<Publicista[]> {
       return this.http.get<Publicista[]>(API_URL + publicistas);
   }

    /**
   * Returns the Observable object containing the editorial retrieved from the API
   * @returns The editorial
   */
   getPublicistaDetail(publicistaId): Observable<PublicistaDetail> {
       return this.http.get<PublicistaDetail>(API_URL + publicistas + '/'+ publicistaId);
   }
   
   /**
   * Creates an author
   * @param publicista The new author
   * @returns The new author with the new id
   */
  createPublicista(publicista): Observable<Publicista> {
   return this.http.post<Publicista>(API_URL + publicistas, publicista);
}
}
