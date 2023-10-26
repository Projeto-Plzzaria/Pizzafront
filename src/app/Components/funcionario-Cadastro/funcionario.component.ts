import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/Models/Funcionario';
import { FuncionarioService } from 'src/app/Service/Funcionario/funcionario.service';

@Component({
  selector: 'app-funcionario-Cadastro',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent {
  funcionarios: Observable<Funcionario[]>;
  displayedColumns = ['nome', 'cargo', 'email', 'numero'];

  constructor(private funcionarioService: FuncionarioService){
    this.funcionarios = this.funcionarioService.listar();
  }
}