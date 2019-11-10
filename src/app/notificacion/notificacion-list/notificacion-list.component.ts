import { Component, OnInit } from '@angular/core';
import { Notificacion } from '../notificacion';
import { NotificacionService } from "../notificacion.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-notificacion-list',
  templateUrl: './notificacion-list.component.html',
  styleUrls: ['./notificacion-list.component.css']
})
export class NotificacionListComponent implements OnInit {

    constructor(private notificacionService:NotificacionService, private router: Router,
  ) { }

  notificaciones: Notificacion[];

    getNotificaciones(){
    this.notificacionService.getNotificaciones().subscribe(notificaciones => this.notificaciones = notificaciones);
    //this.poder = 5;
    console.log("hola");
    console.log(this.notificaciones);

    }

  ngOnInit() {
    this.getNotificaciones();
  }

}