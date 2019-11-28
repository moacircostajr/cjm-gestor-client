import { TestBed } from '@angular/core/testing';

import { QuestaoDaoService } from './questao-dao.service';

describe('QuestaoDaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestaoDaoService = TestBed.get(QuestaoDaoService);
    expect(service).toBeTruthy();
  });
});
