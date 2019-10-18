import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPorSanguePage } from './visualizar-por-sangue.page';

describe('VisualizarPorSanguePage', () => {
  let component: VisualizarPorSanguePage;
  let fixture: ComponentFixture<VisualizarPorSanguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarPorSanguePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarPorSanguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
