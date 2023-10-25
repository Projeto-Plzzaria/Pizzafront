import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Models/Cliente';
import { ClienteService } from 'src/app/Service/Cliente/cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.scss']
})
export class ClienteCadastroComponent {
  clientes: Observable<Cliente[]>;
  displayedColumns = ['nome', 'numero'];

  constructor(private clienteService: ClienteService){
    this.clientes = this.clienteService.listar();
  }

}