import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/Models/Pedido';
import { Bebida } from 'src/app/Models/Bebida';
import { PedidoService } from 'src/app/Service/Pedido/pedido.service';
@Component({
  selector: 'app-pedido-cadastro',
  templateUrl: './pedido-cadastro.component.html',
  styleUrls: ['./pedido-cadastro.component.scss']
})
export class PedidoCadastroComponent {

  @Input() pedido: Pedido = new Pedido();
  @Output() retorno = new EventEmitter<Pedido>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  pedidosService = inject(PedidoService);
  

  constructor() {

  }

  salvar() {
    this.pedidosService.adicionar(this.pedido).subscribe({
      next: pedido => { 
        this.retorno.emit(pedido);
      },
      error: erro => { 
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });


  }
  excluir(produto: Bebida, indice: number) {

    this.pedido.bebida.splice(indice,1);
    
  }
  retornoProdutosList(produto: Bebida) {

    if (this.pedido.bebida == null)
      this.pedido.bebida = [];

    this.pedido.bebida.push(produto);
    this.modalRef.dismiss();
}

  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }

}
