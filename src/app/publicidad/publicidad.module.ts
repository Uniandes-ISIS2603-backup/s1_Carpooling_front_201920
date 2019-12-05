import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';

import {AppRoutingModule} from '../app-routing/app-routing.module';
import { PublicidadCreateComponent } from "./publicidad-create/publicidad-create.component";
import { PublicidadListComponent } from './publicidad-list/publicidad-list.component';
import { PublicidadDetailComponent } from './publicidad-detail/publicidad-detail.component';
import { PublicidadPubComponent } from './publicidad-pub/publicidad-pub.component';
import { PublicidadService } from './publicidad.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPermissionsModule,
    CommonModule,
    FormsModule,
    PublicidadCreateComponent,
    PublicidadListComponent,
    PublicidadDetailComponent,
    PublicidadPubComponent
  ],
  providers: [PublicidadService],
  declarations: [PublicidadCreateComponent, PublicidadListComponent, PublicidadDetailComponent, PublicidadPubComponent]
})
export class PublicidadModule { }
