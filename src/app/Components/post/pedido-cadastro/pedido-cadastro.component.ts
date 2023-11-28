import { Component, EventEmitter, Input, Output, inject,OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/Models/Pedido';
import { Bebida } from 'src/app/Models/Bebida';
import { Comida } from 'src/app/Models/Comida';
import { Cliente } from 'src/app/Models/Cliente';
import { Funcionario } from 'src/app/Models/Funcionario';
import { PedidoService } from 'src/app/Service/Pedido/pedido.service';
import { ClienteService  } from 'src/app/Service/Cliente/cliente.service';
import { FuncionarioService } from 'src/app/Service/Funcionario/funcionario.service';




@Component({
  selector: 'app-pedido-cadastro',
  templateUrl: './pedido-cadastro.component.html',
  styleUrls: ['./pedido-cadastro.component.scss']
})
export class PedidoCadastroComponent implements OnInit {

  @Input() pedido: Pedido = new Pedido();
  @Output() retorno = new EventEmitter<Pedido>();

  modalRef!: NgbModalRef;

  clientes: Cliente[] = [];
  funcionarios: Funcionario[] = [];
  listaCliente: Cliente[] = [];
  listaFuncionario: Funcionario[] = [];

  constructor(
    private pedidoService: PedidoService,
    private clienteService: ClienteService,
    private funcionarioService: FuncionarioService,
    private modalService: NgbModal

  ) {
    
    this.listAllClientes();
this.listAllFuncionario();
}

  

  ngOnInit() {

  
  }
  

  listAllClientes() {
    this.clienteService.listar().subscribe({
      next: (listaCliente) => {
        this.listaCliente = listaCliente;
      },
      error: (erro) => {
        alert('Erro inesperado, por favor recarregue a página!');
        console.error(erro);
      },
    });
  }

  listAllFuncionario() {
    this.funcionarioService.listar().subscribe({
      next: (listaFuncionario) => {
        this.listaFuncionario = listaFuncionario;
      },
      error: (erro) => {
        alert('Erro inesperado, por favor recarregue a página!');
        console.error(erro);
      },
    });
  }

  salvar() {
    console.log(this.pedido);
    if (this.pedido.id > 0) {
      this.pedidoService.atualizar(this.pedido.id, this.pedido).subscribe({
        next: (mensagem) => {
          alert(mensagem.message);
          this.retorno.emit(this.pedido);
        },
        error: (erro) => {
          alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
          console.error(erro);
        }
      });
    } else {
      this.pedidoService.adicionar(this.pedido).subscribe({
        next: (pedido) => {
          this.retorno.emit(pedido);
        },
        error: (erro) => {
          alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
          console.error(erro);
        }
      });
    }
  }
  byId(item1: any, item2: any) {
		if (item1 != null && item2 != null)
			return item1.id === item2.id;
		else
			return item1 === item2;
	}

  excluir(produto: Bebida, indice: number) {
    this.pedido.bebida.splice(indice, 1);
  }

  excluic(produto: Comida, indice: number) {
    this.pedido.comida.splice(indice, 1);
  }

  retornoProdutosList(produto: Bebida) {
    if (this.pedido.bebida == null) {
      this.pedido.bebida = [];
    }
    this.pedido.bebida.push(produto);
    this.modalRef.dismiss();
  }

  retornoComidaList(produtos: Comida) {
    if (this.pedido.comida == null) {
      this.pedido.comida = [];
    }
    this.pedido.comida.push(produtos);
    this.modalRef.dismiss();
  }

  adicionarCliente(cliente: Cliente) {
    this.pedido.cliente = cliente;
  }

  adicionarFuncionario(funcionario: Funcionario) {
    this.pedido.funcionario = funcionario;
  }

  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }



  calcularPrecoTotal(): number {
    let precoTotal = 0;
  
    if (this.pedido.bebida) {
      this.pedido.bebida.forEach((bebida) => {
        precoTotal += bebida.valor;
      });
    }
  
      
    if (this.pedido.comida) {
      this.pedido.comida.forEach((comida) => {
        precoTotal += comida.valor;
      });
    }
  this.pedido.total = precoTotal;
    return precoTotal;
  }
  
}
