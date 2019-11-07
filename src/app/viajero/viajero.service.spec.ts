import { TestBed } from '@angular/core/testing';

import { ViajeroService } from './viajero.service';

describe('ViajeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViajeroService = TestBed.get(ViajeroService);
    expect(service).toBeTruthy();
  });
});
