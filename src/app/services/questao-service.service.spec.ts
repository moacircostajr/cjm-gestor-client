import { TestBed } from '@angular/core/testing';

import { QuestaoServiceService } from './questao-service.service';

describe('QuestaoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestaoServiceService = TestBed.get(QuestaoServiceService);
    expect(service).toBeTruthy();
  });
});
