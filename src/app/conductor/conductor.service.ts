import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conductor } from './conductor';
import { ConductorDetail } from './conductor-detail';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const API_URL = environment.apiURL;
const conductores = "/conductores";
 
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
   console.warn(API_URL + conductores + "/"+conductorId);
   console.warn(conductor);
   return this.http.post<ConductorDetail>(API_URL + conductores,conductor, httpOptions);
 }
}
