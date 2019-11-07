import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeTrayectosComponent } from './viaje-trayectos.component';

describe('ViajeTrayectosComponent', () => {
  let component: ViajeTrayectosComponent;
  let fixture: ComponentFixture<ViajeTrayectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajeTrayectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeTrayectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
