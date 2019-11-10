import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ViajeroService } from '../viajero.service';
import { Viajero } from '../viajero';

@Component({
  selector: 'app-viajero-create',
  templateUrl: './viajero-create.component.html',
  styleUrls: ['./viajero-create.component.css'],
  providers : [DatePipe]
})
export class ViajeroCreateComponent implements OnInit {

  constructor(private dp : DatePipe,
    private viajeroService: ViajeroService,
    private toastrService: ToastrService) { }

    /**
    * The new viajero
    */
   viajero: Viajero;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an viajero
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new viajero
   */
   @Output() create = new EventEmitter();


    /**
    * Creates an viajero
    */
   createViajero(): Viajero {

   // let dateB: Date = new Date(this.viajero.fechaDeNacimiento.year, this.viajero.fechaDeNacimiento.month - 1, this.viajero.fechaDeNacimiento.day);

    //this.viajero.fechaDeNacimiento = this.dp.transform(dateB, 'yyyy-MM-dd');
    console.log(this.viajero);
    this.viajeroService.createViajero(this.viajero)
        .subscribe((viajero) => {
            this.viajero = viajero;
            this.create.emit();
            this.toastrService.success("The viajero was created", "Viajero creation");

        });
    return this.viajero;
}

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
   cancelCreation(): void {
    this.cancel.emit();
}


  ngOnInit() {
    this.viajero = new Viajero();
  }

}
