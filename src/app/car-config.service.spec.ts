import { TestBed } from '@angular/core/testing';

import { CarConfigService } from './car-config.service';

describe('CarConfigService', () => {
  let service: CarConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
