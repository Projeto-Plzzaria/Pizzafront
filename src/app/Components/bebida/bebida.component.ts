import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Bebida } from 'src/app/Models/Bebida';
import { Tamanhob } from 'src/app/Models/Tamanhob';
import { BebidaService } from 'src/app/Service/Bebida/bebida.service';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.scss']
})
export class BebidaComponent {

  lista: Bebida[] = [];


  @Output() retorno = new EventEmitter<Bebida>();
  @Input() modoLancamento: boolean = false;


  objetoSelecionadoParaEdicao: Bebida = new Bebida();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  produtosService = inject(BebidaService);

  constructor() {

    this.listAll();
    //this.exemploErro();

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
  // MÉTODOS DA MODAL

  adicionar(modal: any) {
    this.objetoSelecionadoParaEdicao = new Bebida();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, produto: Bebida, indice: number) {
    this.objetoSelecionadoParaEdicao = Object.assign({}, produto); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }
  

  addOuEditarProduto(produto: Bebida) {
    this.listAll();
    this.modalService.dismissAll();
  }
  


  lancamento(produto: Bebida){
    this.retorno.emit(produto);
  }



}
