import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaComponent } from './comida.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('ComidaComponent', () => {
  let component: ComidaComponent;
  let fixture: ComponentFixture<ComidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ComidaComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA 
      ]
    });
    fixture = TestBed.createComponent(ComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
