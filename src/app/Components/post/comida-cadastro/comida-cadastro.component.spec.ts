import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaCadastroComponent } from './comida-cadastro.component';

describe('ComidaCadastroComponent', () => {
  let component: ComidaCadastroComponent;
  let fixture: ComponentFixture<ComidaCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComidaCadastroComponent]
    });
    fixture = TestBed.createComponent(ComidaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
