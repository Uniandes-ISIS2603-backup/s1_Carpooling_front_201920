import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ConductorCalificacionComponent } from './conductor-calificacion.component';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {AppModule} from '../../app.module';
import {ConductorService} from '../conductor.service';
import {Conductor} from '../conductor';
import {Calificacion} from '../calificacion';

describe('ConductorCalificacionComponent', () => {
  let component: ConductorCalificacionComponent;
  let fixture: ComponentFixture<ConductorCalificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [ ConductorCalificacionComponent ],
      providers :[{provide: APP_BASE_HREF, useValue: ''}, ConductorService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
