import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorAddViajeRecurrenteComponent } from './conductor-add-viaje-recurrente.component';

describe('ConductorAddViajeRecurrenteComponent', () => {
  let component: ConductorAddViajeRecurrenteComponent;
  let fixture: ComponentFixture<ConductorAddViajeRecurrenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductorAddViajeRecurrenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorAddViajeRecurrenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
