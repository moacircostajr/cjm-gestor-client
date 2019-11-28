import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizaBancasPage } from './organiza-bancas.page';

describe('OrganizaBancasPage', () => {
  let component: OrganizaBancasPage;
  let fixture: ComponentFixture<OrganizaBancasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizaBancasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizaBancasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
