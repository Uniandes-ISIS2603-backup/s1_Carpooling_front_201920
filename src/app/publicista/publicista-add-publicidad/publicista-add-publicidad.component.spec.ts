import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicistaAddPublicidadComponent } from './publicista-add-publicidad.component';

describe('PublicistaAddPublicidadComponent', () => {
  let component: PublicistaAddPublicidadComponent;
  let fixture: ComponentFixture<PublicistaAddPublicidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicistaAddPublicidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicistaAddPublicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
