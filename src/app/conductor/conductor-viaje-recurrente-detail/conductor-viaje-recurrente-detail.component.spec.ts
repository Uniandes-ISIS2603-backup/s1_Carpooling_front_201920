import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorViajeRecurrenteDetailComponent } from './conductor-viaje-recurrente-detail.component';

describe('ConductorViajeRecurrenteDetailComponent', () => {
  let component: ConductorViajeRecurrenteDetailComponent;
  let fixture: ComponentFixture<ConductorViajeRecurrenteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductorViajeRecurrenteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorViajeRecurrenteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
