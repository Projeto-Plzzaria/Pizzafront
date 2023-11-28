import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaCadastroComponent } from './comida-cadastro.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Comida } from 'src/app/Models/Comida';
import { Tamanho } from 'src/app/Models/Tamanho';
import { Saborum } from 'src/app/Models/Saborum';
import { Sabordois } from 'src/app/Models/Sabordois';
import { Sabortres } from 'src/app/Models/Sabortres';
import { By } from '@angular/platform-browser';
describe('ComidaCadastroComponent', () => {
  let component: ComidaCadastroComponent;
  let fixture: ComponentFixture<ComidaCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ComidaCadastroComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA 
      ]
    });
    fixture = TestBed.createComponent(ComidaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => { //MOCANDO DADOS
    const mockProduto: Comida = {
      id: 1,
      saborum: Saborum.Calabresa,
      sabordois: Sabordois.Banana,
      sabortres: Sabortres.Chocolate,
      tamanho: Tamanho.MEDIA,
      valor: 10.99
    }; 
  });


it('Teste de 1 @Input - Interpolação no template', () => {
  // Assuming you have a property named saborum in your component
  component.saborum = 'Calabresa';
  
  // Trigger change detection
  fixture.detectChanges();

  // Use Angular testing utilities to get the input element
  let elemento = fixture.debugElement.query(By.css('input[name="saborum"]'));

  // Verifica se o elemento foi encontrado antes de acessar suas propriedades
  if (elemento) {
    let valorDoElemento = elemento.nativeElement.value;
    expect(valorDoElemento).toEqual('Calabresa');
  } else {
    // Adote uma estratégia de tratamento de erro adequada, se necessário
    console.error('Elemento não encontrado no DOM.');
  }
  
});




});
 