import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeroListComponent } from './viajero-list.component';

describe('ViajeroListComponent', () => {
  let component: ViajeroListComponent;
  let fixture: ComponentFixture<ViajeroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajeroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
