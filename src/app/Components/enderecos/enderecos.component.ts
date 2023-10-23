import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from 'src/app/Models/Endereco';
import { EnderecoService } from 'src/app/Service/Endereco/endereco.service';

@Component({
  selector: 'app-enderecos',
  templateUrl: './enderecos.component.html',
  styleUrls: ['./enderecos.component.scss']
})
export class EnderecosComponent {
  enderecos: Observable<Endereco[]>;
  displayedColumns = ['cliente', 'rua', 'numero', 'bairro'];
  
  constructor(private enderecoService: EnderecoService) {
    this.enderecos = this.enderecoService.listar();
  }
}
