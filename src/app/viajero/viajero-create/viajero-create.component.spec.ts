import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeroCreateComponent } from './viajero-create.component';

describe('ViajeroCreateComponent', () => {
  let component: ViajeroCreateComponent;
  let fixture: ComponentFixture<ViajeroCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajeroCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
