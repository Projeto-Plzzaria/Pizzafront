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
  displayedColumns = ['sabor', 'tamanho', 'edit'];

  constructor(private bebidaService: BebidaService){
    this.bebidas = this.bebidaService.listar();
  }


  editarBebida(bebida: Bebida) {
    const id = bebida.id;
    this.bebidaService.atualizar(id, bebida).subscribe(
      () => {
        // A atualização foi bem-sucedida, você pode lidar com isso aqui.
      },
      (error) => {
        // Trate qualquer erro que ocorra durante a atualização.
        console.error('Erro ao atualizar a bebida:', error);
      }
    );
  }
  

}


