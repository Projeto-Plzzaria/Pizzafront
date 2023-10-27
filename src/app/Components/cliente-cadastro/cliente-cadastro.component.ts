import { Component, EventEmitter, Input, Output, inject, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Models/Cliente';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from 'src/app/Service/Cliente/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.scss']
})


export class ClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteEmEdicao: Cliente | null =  null;
  objetoSelecionadoParaEdicao: Cliente = new Cliente();
  indiceSelecionadoParaEdicao!: number;
    modalService = inject(NgbModal);
    modalRef!: NgbModalRef;
    produtosService = inject(ClienteService);
    lista: Cliente[] = [];
    


  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.clienteService.listar().subscribe((data) => {
      this.clientes = data;
    });
  }

  editarCliente(id: number): void {
    this.clienteService.getPorId(id).subscribe((clienteRetornado) => {
      this.clienteEmEdicao = { ...clienteRetornado };
    });
  }
  
  salvarEdicao(): void {
    if (this.clienteEmEdicao) {
      this.clienteService.atualizar(this.clienteEmEdicao.id, this.clienteEmEdicao).subscribe(
        (response) => {
          // Lógica de tratamento bem-sucedido
          this.clienteEmEdicao = null; // Limpa o cliente em edição
        },
        (error) => {
          // Lógica de tratamento de erro
          console.error('Erro ao atualizar o cliente:', error);
        }
      );
    }
  }
  
  cancelarEdicao(): void {
    this.clienteEmEdicao = null; // Cancela a edição e limpa o cliente em edição
  }


  addOuEditarProduto(produto: Cliente) {

    this.listAll();
  
    this.modalService.dismissAll();
  }
  
  listAll() {
  
    this.produtosService.listar().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  
  }
  
  adicionar(modal: any) {
    this.objetoSelecionadoParaEdicao = new Cliente();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

}
