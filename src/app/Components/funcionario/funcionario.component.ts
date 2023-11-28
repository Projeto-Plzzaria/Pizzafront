
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
  @Output() retorno = new EventEmitter<Funcionario>();
  @Input() modoLancamento: boolean = false;

  constructor(private funcionarioService: FuncionarioService){}

  ngOnInit() {
    this.funcionarioService.listar().subscribe((data) => {
      this.funcionarios = data;
    });
  }
  editar(modal: any, produto: Funcionario, indice: number) {
    this.objetoSelecionadoParaEdicao = Object.assign({}, produto); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }


  addOuEditarProduto(produto: Funcionario) {

    this.listAll();
  
    this.modalService.dismissAll();
  }

  lancamento(produto: Funcionario){
    this.retorno.emit(produto);
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

