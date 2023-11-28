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

 
});
