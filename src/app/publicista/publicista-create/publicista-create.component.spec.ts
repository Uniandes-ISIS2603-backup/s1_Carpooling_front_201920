import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicistaCreateComponent } from './publicista-create.component';

describe('PublicistaCreateComponent', () => {
  let component: PublicistaCreateComponent;
  let fixture: ComponentFixture<PublicistaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicistaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicistaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
