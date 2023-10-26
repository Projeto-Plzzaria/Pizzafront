import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/Models/Endereco';
import { EnderecoService } from 'src/app/Service/Endereco/endereco.service';

@Component({
  selector: 'app-enderecos',
  templateUrl: './enderecos.component.html',
  styleUrls: ['./enderecos.component.scss']
})

export class EnderecosComponent  implements OnInit {
  enderecos: Endereco[] = [];
  enderecoEmEdicao: Endereco | null = null;

  constructor(private enderecoService: EnderecoService) {}

  ngOnInit() {
    this.enderecoService.listar().subscribe((data) => {
      this.enderecos = data;
    });
  }

  editarEndereco(id: number): void {
    this.enderecoService.getPorId(id).subscribe((enderecoRetornado) => {
      this.enderecoEmEdicao = { ...enderecoRetornado };
    });
  }

  salvarEdicao(): void {
    if (this.enderecoEmEdicao) {
      this.enderecoService.atualizar(this.enderecoEmEdicao.id, this.enderecoEmEdicao).subscribe(
        (response) => {
          this.enderecoEmEdicao = null;
        },
        (error) => {
          console.error('Erro ao atualizar o cliente:', error);
        }
      );
    }
  }
  cancelarEdicao(): void {
    this.enderecoEmEdicao = null; // Cancela a edição e limpa o cliente em edição
  }




}

