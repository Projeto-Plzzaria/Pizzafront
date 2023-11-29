import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { FuncionarioCadastroComponent } from './funcionario-cadastro.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FuncionarioService } from 'src/app/Service/Funcionario/funcionario.service';
import { of } from 'rxjs';
import { Funcionario } from 'src/app/Models/Funcionario';

describe('FuncionarioCadastroComponent', () => {
  let component: FuncionarioCadastroComponent;
  let fixture: ComponentFixture<FuncionarioCadastroComponent>;
  let funcionarioService: FuncionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FuncionarioCadastroComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [FuncionarioService], // Provide the service here
    });

    fixture = TestBed.createComponent(FuncionarioCadastroComponent);
    component = fixture.componentInstance;
    funcionarioService = TestBed.inject(FuncionarioService); // Inject the service
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call funcionarioService.adicionar when salvar is called', () => {
    const funcionarioSpy = spyOn(
      funcionarioService,
      'adicionar'
    ).and.returnValue(of({} as any));
    component.salvar();
    expect(funcionarioSpy).toHaveBeenCalled();
  });

  it('should emit retorno event when salvar is successful', () => {
    // Arrange
    const funcionario: Funcionario = { id: 1, nome: 'Teste', numero: '123', cargo: 'cargo', email: '@e' };
    const emitSpy = spyOn(component.retorno, 'emit');
    spyOn(funcionarioService, 'adicionar').and.returnValue(of(funcionario));
  
    // Act
    component.salvar();
  
    // Assert
    expect(emitSpy).toHaveBeenCalledWith(funcionario);
  });
  


 
});
