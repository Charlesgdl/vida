import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroHospitalPage } from './cadastro-hospital.page';

describe('CadastroHospitalPage', () => {
  let component: CadastroHospitalPage;
  let fixture: ComponentFixture<CadastroHospitalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroHospitalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroHospitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
