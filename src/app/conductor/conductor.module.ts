import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ConductorListComponent } from './conductor-list/conductor-list.component';
import { ConductorService } from './conductor.service';
import { HttpClientModule } from '@angular/common/http';
import { ConductorDetailComponent } from './conductor-detail/conductor-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [ConductorListComponent, ConductorDetailComponent],
  providers: [ConductorService]
})
export class ConductorModule { }