import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Comida } from 'src/app/Models/Comida';
import { ComidaService } from 'src/app/Service/Comida/comida.service';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.scss']
})
export class ComidaComponent {
  comidas: Observable<Comida[]>;
  displayedColumns = ['ingredientes', 'tamanho'];

  constructor(private comidaService: ComidaService) {
    this.comidas = this.comidaService.listar();
    this.comidas.subscribe(data => {
        console.log(data);
    });
}
}

