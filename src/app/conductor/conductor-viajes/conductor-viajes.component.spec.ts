import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorViajesComponent } from './conductor-viajes.component';

describe('ConductorViajesComponent', () => {
  let component: ConductorViajesComponent;
  let fixture: ComponentFixture<ConductorViajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductorViajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
