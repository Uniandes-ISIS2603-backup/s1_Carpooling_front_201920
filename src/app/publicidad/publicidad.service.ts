import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Publicidad } from '../../classes/publicidad';
import { PublicidadDetail } from '../../classes/publicidad-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const publicidades = '/publicidades';

@Injectable({
  providedIn: 'root'
})
export class PublicidadService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }

   /**
   * Returns the Observable object containing the list of publicidades retrieved from the API
   * @returns The list of publicistas in real time
   */
   getPublicidades(): Observable<Publicidad[]> {
       return this.http.get<Publicidad[]>(API_URL + publicidades);
   }

   /**
   * Returns the Observable object containing the publicidad retrieved from the API
   * @returns The publicidad
   */
   getPublicidadDetail(publicidadId): Observable<PublicidadDetail> {
       return this.http.get<PublicidadDetail>(API_URL + publicidades + '/' + publicidadId);
   }
   
   /**
   * Creates an publicidad
   * @param publicidad The publicidad which will be created
   * @returns The confirmation of the publicidad's creation
   */
   createPublicidad(publicidad): Observable<Publicidad> {
       return this.http.post<Publicidad>(API_URL + publicidades, publicidad);
   }
   
   /**
   * Updates an publicidad
   * @param publicidad The publicidad which will be update
   * @returns The confirmation of the publicidad's update
   */
   updatePublicidad(publicidad): Observable<PublicidadDetail> {
       return this.http.put<PublicidadDetail>(API_URL + publicidades + '/' + publicidad.id, publicidad);
   }
   
   /**
   * Deletes an publicidad
   * @param publicidadId The publicidad which will be deleted
   * @returns True if the publicidad was deleted, false otherwise
   */
   deletePublicidad(publicidadId): Observable<PublicidadDetail> {
       return this.http.delete<PublicidadDetail>(API_URL + publicidades + '/' + publicidadId);
   }
}
