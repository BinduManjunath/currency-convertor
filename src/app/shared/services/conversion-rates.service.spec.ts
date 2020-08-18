import { TestBed } from '@angular/core/testing';

import { ConversionRatesService } from './conversion-rates.service';

describe('ConversionRatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConversionRatesService = TestBed.get(ConversionRatesService);
    expect(service).toBeTruthy();
  });
});
