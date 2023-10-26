import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Bebida } from 'src/app/Models/Bebida';
import { BebidaService } from 'src/app/Service/Bebida/bebida.service';

@Component({
  selector: 'app-bebida-cadastro',
  templateUrl: './bebida-cadastro.component.html',
  styleUrls: ['./bebida-cadastro.component.scss'],
})
export class BebidaCadastroComponent {
  @Input() bebida: Bebida = new Bebida();
  
  @Output() retorno = new EventEmitter<Bebida>();

  bebidaService = inject(BebidaService);
  constructor() {}
  salvar() {

    this.bebidaService.adicionar(this.bebida).subscribe({
      next: (bebida) => {
        console.log("ESTA VIVO!!!!");
        this.retorno.emit(bebida);
      },
      error: (erro) => {
        console.log("teste erro");
        console.error(erro);
      },
    });
  }
}
