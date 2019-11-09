import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConductorService } from './conductor.service';
import { ConductorListaComponent } from './conductor-lista/conductor-lista.component';
import { ConductorDetailComponent } from './conductor-detail/conductor-detail.component';
import { ConductorCreateComponent } from './conductor-create/conductor-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [ConductorListaComponent, ConductorDetailComponent, ConductorCreateComponent],
  providers: [ConductorService],
  exports: [ConductorListaComponent, ConductorCreateComponent, ReactiveFormsModule, FormsModule ]
})
export class ConductorModule { }