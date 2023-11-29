import { ComponentFixture, TestBed } from '@angular/core/testing';


import { BebidaComponent } from './bebida.component';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Bebida } from 'src/app/Models/Bebida';

describe('BebidaComponent', () => {
  let component: BebidaComponent;
  let fixture: ComponentFixture<BebidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [BebidaComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA 
      ]
    });
    fixture = TestBed.createComponent(BebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should edit product and open modal when editar is called', () => {
    const mockProduct = new Bebida(); // Make sure mockProduct is properly initialized
    const mockIndex = 0;
  
    component.editar('modal1', mockProduct, mockIndex);
  
    // Your expectations...
  });
  
  
});

