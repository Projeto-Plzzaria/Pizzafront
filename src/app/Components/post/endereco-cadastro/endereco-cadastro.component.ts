import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Endereco } from 'src/app/Models/Endereco';
import { EnderecoService } from 'src/app/Service/Endereco/endereco.service';


@Component({
  selector: 'app-endereco-cadastro',
  templateUrl: './endereco-cadastro.component.html',
  styleUrls: ['./endereco-cadastro.component.scss']
})
export class EnderecoCadastroComponent {

  @Input() endereco: Endereco = new Endereco();
  @Output() retorno = new EventEmitter<Endereco>();

  enderecoService = inject(EnderecoService);
  constructor() {
  }
  salvar() {
    this.enderecoService.adicionar(this.endereco).subscribe({
      next: endereco => { 
        this.retorno.emit(endereco);
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });



  }

}