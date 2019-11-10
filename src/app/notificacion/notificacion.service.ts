import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, OnInit} from '@angular/core';
import { Notificacion } from "./notificacion";

const API_URL= "../../assets/";
const notificaciones = 'notificaciones.json';

@Injectable()
export class NotificacionService {

  constructor( private http: HttpClient) { }

  getNotificaciones(): Observable<Notificacion[]> {
    return this.http.get<Notificacion[]>(API_URL + notificaciones);
  }


 // getHeroDetail(id): Observable<ReservaDetail> {
   // return this.http.get<ReservaDetail>(API_URL + heroesDetail[id-1]);
  //}

}