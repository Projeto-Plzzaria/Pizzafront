import { Component, OnInit } from '@angular/core';
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
  comidaEmEdicao: Comida | null = new Comida();
  saboresSelecionados: Sabores[] = []; // Lista de sabores selecionados

  saboresEnumValues = Object.values(Sabores);

  // Mapeamento de nomes de sabores para valores de enum
  saboresEnumMap: { [key: string]: Sabores } = {
    'Frango_com_Catupiry': Sabores.Frango_com_Catupiry,
    'Portuguesa': Sabores.Portuguesa,
    'Calabresa':Sabores.Calabresa,
    'Alho_e_Oleo':Sabores.Alho_e_Oleo,
    'Strogonoff_de_Carne':Sabores.Strogonoff_de_Carne,
    'Chocolate':Sabores.Chocolate,
    'Banana':Sabores.Banana,
    // Adicione outros sabores conforme necessário
  };

  constructor(private comidaService: ComidaService) {}

  ngOnInit() {
    this.comidaService.listar().subscribe((data) => {
      this.comidas = data;
    });
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
}
