import { TestBed } from '@angular/core/testing';

import { PublicistaService } from './publicista.service';

describe('PublicistaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicistaService = TestBed.get(PublicistaService);
    expect(service).toBeTruthy();
  });
});
