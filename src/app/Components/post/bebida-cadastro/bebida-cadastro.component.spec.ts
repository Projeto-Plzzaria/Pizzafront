import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BebidaCadastroComponent } from './bebida-cadastro.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BebidaService } from 'src/app/Service/Bebida/bebida.service';
import { Bebida } from 'src/app/Models/Bebida';
import { Tamanhob } from 'src/app/Models/Tamanhob';
import { of } from 'rxjs';

describe('BebidaCadastroComponent', () => {
  let component: BebidaCadastroComponent;
  let fixture: ComponentFixture<BebidaCadastroComponent>;
  let bebidaService: jasmine.SpyObj<BebidaService>;

  beforeEach(() => {
    const bebidaServiceSpy = jasmine.createSpyObj('BebidaService', ['adicionar']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BebidaCadastroComponent],
      providers: [
        { provide: BebidaService, useValue: bebidaServiceSpy }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(BebidaCadastroComponent);
    component = fixture.componentInstance;
    bebidaService = TestBed.inject(BebidaService) as jasmine.SpyObj<BebidaService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call adicionar method when salvar is called', fakeAsync(() => {
    // Arrange
    const bebida: Bebida = {
      id: 1, // atribuir um valor adequado para id
      sabor: 'Teste',
      tamanho: Tamanhob.L_1,
      valor: 10
    };

    bebidaService.adicionar.and.returnValue(of(bebida));


    component.salvar();
    tick();

   
    expect(bebidaService.adicionar).toHaveBeenCalledWith(component.bebida);
  
  }));
});
