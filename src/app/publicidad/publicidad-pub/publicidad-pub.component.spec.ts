import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadPubComponent } from './publicidad-pub.component';

describe('PublicidadPubComponent', () => {
  let component: PublicidadPubComponent;
  let fixture: ComponentFixture<PublicidadPubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicidadPubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicidadPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
