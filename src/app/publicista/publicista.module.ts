import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicistaListComponent } from './publicista-list/publicista-list.component';
import { PublicistaDetailComponent } from './publicista-detail/publicista-detail.component';
import { PublicistaCreateComponent } from './publicista-create/publicista-create.component';
import { PublicistaService } from './publicista.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [PublicistaListComponent,
    PublicistaDetailComponent,
    PublicistaCreateComponent],
    providers: [PublicistaService],
    exports:[PublicistaListComponent]
})
export class PublicistaModule { }
