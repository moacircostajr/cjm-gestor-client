import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizaConcursosPage } from './organiza-concursos.page';

describe('OrganizaConcursosPage', () => {
  let component: OrganizaConcursosPage;
  let fixture: ComponentFixture<OrganizaConcursosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizaConcursosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizaConcursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
