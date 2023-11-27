import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioCadastroComponent } from './funcionario-cadastro.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('FuncionarioCadastroComponent', () => {
  let component: FuncionarioCadastroComponent;
  let fixture: ComponentFixture<FuncionarioCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [FuncionarioCadastroComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA 
      ]
    });
    fixture = TestBed.createComponent(FuncionarioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
