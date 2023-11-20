import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Comida } from 'src/app/Models/Comida';
import { Sabordois } from 'src/app/Models/Sabordois';
import { Sabortres } from 'src/app/Models/Sabortres';
import { Saborum } from 'src/app/Models/Saborum';
import { Tamanho } from 'src/app/Models/Tamanho';
import { ComidaService } from 'src/app/Service/Comida/comida.service';

@Component({
  selector: 'app-comida-cadastro',
  templateUrl: './comida-cadastro.component.html',
  styleUrls: ['./comida-cadastro.component.scss'] 
})
export class ComidaCadastroComponent {
  @Input() comida: Comida = new Comida();
  saborumEnum = Object.values(Saborum);
  sabordoisEnum = Object.values(Sabordois);
  sabortresEnum = Object.values(Sabortres);
  tamanhosEnum = Object.values(Tamanho);
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
  getTamanhoString(tamanho: Tamanho): string {
    return Tamanho[tamanho];
  }

  shouldShowSabordois() {
    return this.comida.tamanho === Tamanho.MEDIA;
  }

  shouldShowSabortres() {
    return this.comida.tamanho === Tamanho.GRANDE;
  }

}