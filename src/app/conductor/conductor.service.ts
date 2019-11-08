import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conductor } from './conductor';
import { ConductorDetail } from './conductor-detail';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const conductores = "conductores.json";
 
@Injectable()
export class ConductorService {

 constructor(private http: HttpClient) { }

 getConductores(): Observable<Conductor[]>{
   return this.http.get<Conductor[]>(API_URL + conductores);
 }
 getConductorDetail(conductorId): Observable<ConductorDetail>{
   console.log(API_URL + "conductor-"+conductorId+".json");
   return this.http.get<ConductorDetail>(API_URL + "conductor-"+conductorId+".json");
 }
}