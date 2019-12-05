import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadListComponent } from './publicidad-list.component';

describe('PublicidadListComponent', () => {
  let component: PublicidadListComponent;
  let fixture: ComponentFixture<PublicidadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicidadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicidadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
