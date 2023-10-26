import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Comida } from 'src/app/Models/Comida';
import { Sabores } from 'src/app/Models/Sabores';
import { ComidaService } from 'src/app/Service/Comida/comida.service';

@Component({
  selector: 'app-comida-cadastro',
  templateUrl: './comida-cadastro.component.html',
  styleUrls: ['./comida-cadastro.component.scss'] 
})
export class ComidaCadastroComponent {
  @Input() saboresEnumValues: string[] = [];
  @Input() comida: Comida = new Comida();
  @Output() retorno = new EventEmitter<Comida>();
  objetoSelecionadoParaEdicao: Comida = new Comida();
  indiceSelecionadoParaEdicao!: number;
  comidaService = inject(ComidaService);
  constructor() {
  }
  salvar() {
    this.comidaService.adicionar(this.comida).subscribe({
      next: comida => { 
        this.retorno.emit(comida);
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }

  saboresSelecionados: Sabores[] = [];

  saborSelecionado(sabor: Sabores | string): boolean {
    if (typeof sabor === 'string') {
      // Se for uma string, tenta converter para o enum Sabores
      sabor = Sabores[sabor as keyof typeof Sabores];
    }
  
    if (typeof sabor === 'number') {
      // Verifique se o valor do enum é um número
      return this.saboresSelecionados.includes(sabor);
    }
  
    return false;
  }
  
  alterarSelecaoSabor(event: any, sabor: Sabores | string) {
    if (typeof sabor === 'string') {
      // Se for uma string, tenta converter para o enum Sabores
      sabor = Sabores[sabor as keyof typeof Sabores];
    }
  
    if (typeof sabor === 'number') {
      // Verifique se o valor do enum é um número
      if (event.target.checked) {
        this.saboresSelecionados.push(sabor);
      } else {
        const index = this.saboresSelecionados.indexOf(sabor);
        if (index >= 0) {
          this.saboresSelecionados.splice(index, 1);
        }
      }
    }
  }
  

}
