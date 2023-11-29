import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { ClienteCadastroComponent } from './cliente-cadastro.component';
import { Cliente } from 'src/app/Models/Cliente';
import { ClienteService } from 'src/app/Service/Cliente/cliente.service';
import { of } from 'rxjs';

describe('ClienteCadastroComponent', () => {
  let component: ClienteCadastroComponent;
  let fixture: ComponentFixture<ClienteCadastroComponent>;
  let clienteService: jasmine.SpyObj<ClienteService>;

  beforeEach(waitForAsync(() => {
    const clienteServiceSpy = jasmine.createSpyObj('ClienteService', ['adicionar']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ClienteCadastroComponent],
      providers: [
        { provide: ClienteService, useValue: clienteServiceSpy }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCadastroComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService) as jasmine.SpyObj<ClienteService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit retorno event when salvar is successful', () => {
    // Arrange
    const cliente: Cliente = { id: 1, nome: 'Teste', numero: '123' };
    const emitSpy = spyOn(component.retorno, 'emit');
    clienteService.adicionar.and.returnValue(of(cliente));

    // Act
    component.salvar();

    // Assert
    expect(emitSpy).toHaveBeenCalledWith(cliente);
  });

  
});
