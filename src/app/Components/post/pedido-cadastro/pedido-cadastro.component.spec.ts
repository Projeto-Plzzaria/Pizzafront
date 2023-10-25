import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoCadastroComponent } from './pedido-cadastro.component';

describe('PedidoCadastroComponent', () => {
  let component: PedidoCadastroComponent;
  let fixture: ComponentFixture<PedidoCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoCadastroComponent]
    });
    fixture = TestBed.createComponent(PedidoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
