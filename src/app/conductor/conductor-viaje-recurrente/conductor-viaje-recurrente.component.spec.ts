import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorViajeRecurrenteComponent } from './conductor-viaje-recurrente.component';

describe('ConductorViajeRecurrenteComponent', () => {
  let component: ConductorViajeRecurrenteComponent;
  let fixture: ComponentFixture<ConductorViajeRecurrenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductorViajeRecurrenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorViajeRecurrenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
