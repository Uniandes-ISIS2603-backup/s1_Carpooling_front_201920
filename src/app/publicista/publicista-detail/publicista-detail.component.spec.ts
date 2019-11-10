import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicistaDetailComponent } from './publicista-detail.component';

describe('PublicistaDetailComponent', () => {
  let component: PublicistaDetailComponent;
  let fixture: ComponentFixture<PublicistaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicistaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicistaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
