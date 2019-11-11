import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorAddViajeComponent } from './conductor-add-viaje.component';

describe('ConductorAddViajeComponent', () => {
  let component: ConductorAddViajeComponent;
  let fixture: ComponentFixture<ConductorAddViajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductorAddViajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorAddViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
