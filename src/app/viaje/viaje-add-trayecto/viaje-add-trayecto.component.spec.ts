import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeAddTrayectoComponent } from './viaje-add-trayecto.component';

describe('ViajeAddTrayectoComponent', () => {
  let component: ViajeAddTrayectoComponent;
  let fixture: ComponentFixture<ViajeAddTrayectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajeAddTrayectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeAddTrayectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
