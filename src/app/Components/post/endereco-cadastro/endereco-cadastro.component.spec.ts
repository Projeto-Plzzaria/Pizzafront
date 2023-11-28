import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EnderecoCadastroComponent } from './endereco-cadastro.component';
import { EnderecoService } from 'src/app/Service/Endereco/endereco.service';
import { of } from 'rxjs';

describe('EnderecoCadastroComponent', () => {
  let component: EnderecoCadastroComponent;
  let fixture: ComponentFixture<EnderecoCadastroComponent>;
  let enderecoService: EnderecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [EnderecoCadastroComponent],
      providers: [EnderecoService],
    });

    fixture = TestBed.createComponent(EnderecoCadastroComponent);
    component = fixture.componentInstance;
    enderecoService = TestBed.inject(EnderecoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call enderecoService.adicionar when salvar is called', () => {
    const enderecoSpy = spyOn(enderecoService, 'adicionar').and.returnValue(of({} as any));
    component.salvar();
    expect(enderecoSpy).toHaveBeenCalled();
  });

  

 
});
