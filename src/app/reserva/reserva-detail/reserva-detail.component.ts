import { Component, OnInit, Input } from '@angular/core';
import { ReservaService } from '../reserva.service';
import { Reserva } from '../reserva';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-reserva-detail',
  templateUrl: './reserva-detail.component.html',
  styleUrls: ['./reserva-detail.component.css']
})
export class ReservaDetailComponent implements OnInit {


  constructor(
    private reservaService:ReservaService,
    private route: ActivatedRoute
  ) { 
    
  }

  reserva: Reserva;

  @Input() reservaId:number;

  loader: any;

  getReservaDetail():void {
    this.reservaService.getReserva(this.reservaId).subscribe(reserva=>{this.reserva=reserva});
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
    this.reserva = new Reserva();
    this.getReservaDetail();
  }

  onLoad(params) {

    this.reservaId = parseInt(params['id']);
    console.log(" en detail " + this.reservaId);
    this.reserva = new Reserva();
    this.getReservaDetail();
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

  updateTrayectos():void{
    this.getReservaDetail();

  }

}