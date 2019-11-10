import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, OnInit} from '@angular/core';
import { Reserva } from "./reserva";

const API_URL= "../../assets/";
const reservas = 'reservas.json';
const reservasDetail= ["heroes1.json","heroes2.json", "heroes3.json", "heroes4.json"]
const viajes = '/viajes';
@Injectable()
export class ReservaService {

  constructor( private http: HttpClient) { }

  getReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(API_URL + reservas);
  }
    createReserva(viajeId, reserva): Observable<Reserva> {
    return this.http.post<Reserva>(API_URL + viajes + '/' + viajeId + "/reservas", reserva);
}

 // getHeroDetail(id): Observable<ReservaDetail> {
   // return this.http.get<ReservaDetail>(API_URL + heroesDetail[id-1]);
  //}

}