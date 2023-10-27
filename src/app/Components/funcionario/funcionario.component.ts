
import { Funcionario } from 'src/app/Models/Funcionario';
import { FuncionarioService } from 'src/app/Service/Funcionario/funcionario.service';
import { Component, EventEmitter, Input, Output, inject, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-funcionario-Cadastro',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
  
})
export class FuncionarioComponent implements OnInit{
  funcionarios: Funcionario[] = [];
  funcionarioEmEdicao: Funcionario | null = null;
  objetoSelecionadoParaEdicao: Funcionario = new Funcionario();
  indiceSelecionadoParaEdicao!: number;
  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  produtosService = inject(FuncionarioService);
  lista: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService){}

  ngOnInit() {
    this.funcionarioService.listar().subscribe((data) => {
      this.funcionarios = data;
    });
  }


  editarFuncionario(id: number): void {
    this.funcionarioService.getPorId(id).subscribe((funcionarioRetornado) => {
      this.funcionarioEmEdicao = { ...funcionarioRetornado };
    });
  }

  salvarEdicao(): void {
    if (this.funcionarioEmEdicao) {
      this.funcionarioService.atualizar(this.funcionarioEmEdicao.id, this.funcionarioEmEdicao).subscribe(
        (response) => {
          // Lógica de tratamento bem-sucedido
          this.funcionarioEmEdicao = null; // Limpa o cliente em edição
        },
        (error) => {
          // Lógica de tratamento de erro
          console.error('Erro ao atualizar o cliente:', error);
        }
      );
    }
  }


  cancelarEdicao(): void {
    this.funcionarioEmEdicao = null; // Cancela a edição e limpa o cliente em edição
  }



  addOuEditarProduto(produto: Funcionario) {

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
    this.objetoSelecionadoParaEdicao = new Funcionario();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }






}

