import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ConductorVehiculoComponent } from './conductor-vehiculo.component';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {AppModule} from '../../app.module';
import {ConductorService} from '../conductor.service';
import {Conductor} from '../conductor';
import {Vehiculo} from '../vehiculo';

describe('ConductorVehiculoComponent', () => {
  let component: ConductorVehiculoComponent;
  let fixture: ComponentFixture<ConductorVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [ ConductorVehiculoComponent ],
      providers :[{provide: APP_BASE_HREF, useValue: ''}, ConductorService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
