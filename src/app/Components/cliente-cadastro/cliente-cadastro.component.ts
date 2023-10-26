import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Models/Cliente';
import { ClienteService } from 'src/app/Service/Cliente/cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.scss']
})


export class ClienteCadastroComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteEmEdicao: Cliente | null = new Cliente();
  
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

  editarClientePorId(id: number): void {
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
}
