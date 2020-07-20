import { TestBed } from '@angular/core/testing';

import { ConfigFormService } from './config-form.service';

describe('ConfigFormService', () => {
  let service: ConfigFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
