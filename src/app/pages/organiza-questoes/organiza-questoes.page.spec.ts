import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizaQuestoesPage } from './organiza-questoes.page';

describe('OrganizaQuestoesPage', () => {
  let component: OrganizaQuestoesPage;
  let fixture: ComponentFixture<OrganizaQuestoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizaQuestoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizaQuestoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
