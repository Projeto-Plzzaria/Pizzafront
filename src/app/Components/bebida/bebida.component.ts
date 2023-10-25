import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Bebida } from 'src/app/Models/Bebida';
import { BebidaService } from 'src/app/Service/Bebida/bebida.service';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.scss']
})
export class BebidaComponent {
  bebidas: Observable<Bebida[]>;
  displayedColumns = ['sabor', 'tamanho'];

  constructor(private bebidaService: BebidaService){
    this.bebidas = this.bebidaService.listar();
  }
  

}