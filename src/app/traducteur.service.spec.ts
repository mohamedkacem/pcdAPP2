import { TestBed } from '@angular/core/testing';

import { TraducteurService } from './traducteur.service';

describe('TraducteurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TraducteurService = TestBed.get(TraducteurService);
    expect(service).toBeTruthy();
  });
});
