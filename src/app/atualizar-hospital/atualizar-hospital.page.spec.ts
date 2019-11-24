import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarHospitalPage } from './atualizar-hospital.page';

describe('AtualizarHospitalPage', () => {
  let component: AtualizarHospitalPage;
  let fixture: ComponentFixture<AtualizarHospitalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarHospitalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarHospitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
