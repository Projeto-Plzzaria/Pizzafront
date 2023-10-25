import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Funcionario } from 'src/app/Models/Funcionario';
import { FuncionarioService } from 'src/app/Service/Funcionario/funcionario.service';

@Component({
  selector: 'app-funcionario-cadastro',
  templateUrl: './funcionario-cadastro.component.html',
  styleUrls: ['./funcionario-cadastro.component.scss']
})
export class FuncionarioCadastroComponent {

  @Input() funcionario: Funcionario = new Funcionario();
  @Output() retorno = new EventEmitter<Funcionario>();

  funcionarioService = inject(FuncionarioService);
  constructor() {
  }
  salvar() {
    this.funcionarioService.adicionar(this.funcionario).subscribe({
      next: funcionario => { 
        this.retorno.emit(funcionario);
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });



  }

}