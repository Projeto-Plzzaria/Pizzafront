import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Comida } from 'src/app/Models/Comida';
import { ComidaService } from 'src/app/Service/Comida/comida.service';

@Component({
  selector: 'app-comida-cadastro',
  templateUrl: './comida-cadastro.component.html',
  styleUrls: ['./comida-cadastro.component.scss'] 
})
export class ComidaCadastroComponent {

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

}