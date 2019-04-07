import { TestBed } from '@angular/core/testing';

import { MotService } from './mot.service';

describe('MotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotService = TestBed.get(MotService);
    expect(service).toBeTruthy();
  });
});
