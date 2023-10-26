import { Component, OnInit, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Comida } from 'src/app/Models/Comida';
import { Sabores } from 'src/app/Models/Sabores';
import { ComidaService } from 'src/app/Service/Comida/comida.service';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.scss']
})

export class ComidaComponent implements OnInit {
  comidas: Comida[] = [];
  comidaEmEdicao: Comida | null = null; // Alteração para inicializar como nulo
  sabores: Sabores[] = []; // Lista de sabores selecionados
  saboresSelecionados: Sabores[] = []; // Lista de sabores selecionados

  @Output() retorno = new EventEmitter<Comida>();
  @Input() modoLancamento: boolean = false;

  lista: Comida[] = [];

  ngOnInit() {
    this.comidaService.listar().subscribe((data) => {
      this.comidas = data;
    });
  }

  objetoSelecionadoParaEdicao: Comida = new Comida();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  saboresEnumValues = Object.values(Sabores);

  saboresEnumMap: { [key: string]: Sabores } = {
    'Frango_com_Catupiry': Sabores.Frango_com_Catupiry,
    'Portuguesa': Sabores.Portuguesa,
    'Calabresa': Sabores.Calabresa,
    'Alho_e_Oleo': Sabores.Alho_e_Oleo,
    'Strogonoff_de_Carne': Sabores.Strogonoff_de_Carne,
    'Chocolate': Sabores.Chocolate,
    'Banana': Sabores.Banana,
  };

  constructor(private comidaService: ComidaService) {}

  saborSelecionado(sabor: Sabores): boolean {
    return this.sabores.includes(sabor);
  }

  toggleSabor(sabor: Sabores) {
    if (this.saborSelecionado(sabor)) {
      this.sabores = this.sabores.filter((s) => s !== sabor);
    } else {
      this.sabores.push(sabor);
    }
  }

  adicionar(modal: any) {
    this.objetoSelecionadoParaEdicao = new Comida();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  editarComida(id: number): void {
    this.comidaService.getPorId(id).subscribe((comidaRetornada) => {
      this.comidaEmEdicao = { ...comidaRetornada };
      this.saboresSelecionados = [...comidaRetornada.sabores];
    });
  }

  salvarEdicao(): void {
    if (this.comidaEmEdicao) {
      // Mapeia os nomes de sabores selecionados de volta para valores de enum
      this.comidaEmEdicao.sabores = this.saboresSelecionados.map(sabor => this.saboresEnumMap[sabor]);
      
      this.comidaService.atualizar(this.comidaEmEdicao.id, this.comidaEmEdicao).subscribe(
        (response) => {
          // Lógica de tratamento bem-sucedido
          this.comidaEmEdicao = null;
        },
        (error) => {
          // Lógica de tratamento de erro
          console.error('Erro ao atualizar a comida:', error);
        }
      );
    }
  }

  cancelarEdicao(): void {
    this.comidaEmEdicao = null;
    this.saboresSelecionados = [];
  }

  carregarComidas() {
    this.comidaService.listar().subscribe((data) => {
      this.comidas = data;
    });
  }
}
