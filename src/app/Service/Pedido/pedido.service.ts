import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/Models/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private baseUrl = 'http://localhost:8080/api/Pedido'; 

  constructor(private http: HttpClient) { }

  listar(): Observable<Pedido[]> {
    const url = `${this.baseUrl}/lista`;
    return this.http.get<Pedido[]>(url);
  }

  getPorId(id: number): Observable<Pedido> {
    const url = `${this.baseUrl}/id/${id}`;
    return this.http.get<Pedido>(url);
  }

  adicionar(pedido: Pedido): Observable<Pedido> {
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post<Pedido>(url, pedido);
  }

  atualizar(id: number, Pedido: any): Observable<any> {
    const url = `${this.baseUrl}/put/id/${id}`;
    return this.http.put(url, Pedido);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}