import { TestBed } from '@angular/core/testing';

import { OrganizaQuestoesDaoService } from './organiza-questoes-dao.service';

describe('OrganizaQuestoesDaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizaQuestoesDaoService = TestBed.get(OrganizaQuestoesDaoService);
    expect(service).toBeTruthy();
  });
});
