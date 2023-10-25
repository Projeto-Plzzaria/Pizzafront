import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidaCadastroComponent } from './bebida-cadastro.component';

describe('BebidaCadastroComponent', () => {
  let component: BebidaCadastroComponent;
  let fixture: ComponentFixture<BebidaCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BebidaCadastroComponent]
    });
    fixture = TestBed.createComponent(BebidaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
