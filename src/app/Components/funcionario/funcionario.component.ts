import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/Models/Funcionario';
import { FuncionarioService } from 'src/app/Service/Funcionario/funcionario.service';

@Component({
  selector: 'app-funcionario-Cadastro',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit{
  funcionarios: Funcionario[] = [];
  funcionarioEmEdicao: Funcionario | null = new Funcionario();

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
}
