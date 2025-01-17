import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import { ConductorAddCalificacionComponent } from './conductor-add-calificacion.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {ConductorService} from '../conductor.service';
import {Conductor} from '../conductor';


describe('ConductorAddCalificacionComponent', () => {
  let component: ConductorAddCalificacionComponent;
  let fixture: ComponentFixture<ConductorAddCalificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [AppRoutingModule, HttpClientModule, AppModule],
        declarations: [],
        providers: [
            {
                provide: APP_BASE_HREF,
                useValue: ''
            }, 
            ConductorService,
            {
                provide: ActivatedRoute,
                useValue: {
                    snapshot: {
                       paramMap: convertToParamMap({id: 100})
                    }
                }
            }
        ]
    }).compileComponents();
}));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorAddCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
