import { TestBed } from '@angular/core/testing';

import { PadroesService } from './padroes.service';

describe('PadroesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PadroesService = TestBed.get(PadroesService);
    expect(service).toBeTruthy();
  });
});
