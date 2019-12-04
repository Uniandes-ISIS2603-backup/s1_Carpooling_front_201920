import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PublicistaService } from '../publicista.service';
import { Publicista } from '../publicista';
@Component({
  selector: 'app-publicista-create',
  templateUrl: './publicista-create.component.html',
  styleUrls: ['./publicista-create.component.css']
})
export class PublicistaCreateComponent implements OnInit {

  constructor(
    private publicistaService: PublicistaService,
    private toastrService: ToastrService) { }

    /**
    * The new publicista
    */
   publicista: Publicista;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an publicista
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new publicista
   */
   @Output() create = new EventEmitter();


    /**
    * Creates an publicista
    */
   createPublicista(): Publicista {
    console.log(this.publicista);
    this.publicistaService.createPublicista(this.publicista)
        .subscribe((publicista) => {
            this.publicista = publicista;
            this.create.emit();
            this.toastrService.success("The publicista was created", "Publicista creation");

        });
    return this.publicista;
}

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
   cancelCreation(): void {
    this.cancel.emit();
}


  ngOnInit() {
    this.publicista = new Publicista();
  }

}
