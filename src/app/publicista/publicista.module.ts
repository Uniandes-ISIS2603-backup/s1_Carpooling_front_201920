import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicistaListComponent } from './publicista-list/publicista-list.component';
import { PublicistaDetailComponent } from './publicista-detail/publicista-detail.component';
import { PublicistaCreateComponent } from './publicista-create/publicista-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PublicistaListComponent,
    PublicistaDetailComponent,
    PublicistaCreateComponent],
    exports:[PublicistaListComponent]
})
export class PublicistaModule { }
