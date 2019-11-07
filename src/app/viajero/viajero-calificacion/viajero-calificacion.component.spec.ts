import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ViajeroCalificacionComponent } from './viajero-calificacion.component';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {AppModule} from '../../app.module';
import {ViajeroService} from '../viajero.service';
import {Viajero} from '../viajero';
import {Calificacion} from '../calificacion';

describe('ViajeroCalificacionComponent', () => {
  let component: ViajeroCalificacionComponent;
  let fixture: ComponentFixture<ViajeroCalificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [ ViajeroCalificacionComponent ],
      providers :[{provide: APP_BASE_HREF, useValue: ''}, ViajeroService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeroCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
