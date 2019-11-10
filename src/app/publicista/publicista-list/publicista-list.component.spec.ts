import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicistaListComponent } from './publicista-list.component';

describe('PublicistaListComponent', () => {
  let component: PublicistaListComponent;
  let fixture: ComponentFixture<PublicistaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicistaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicistaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
