import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'http://localhost:8080/api/Cliente'; 

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]> {
    const url = `${this.baseUrl}/lista`;
    return this.http.get<Cliente[]>(url);
  }

  getPorId(id: number): Observable<Cliente> {
    const url = `${this.baseUrl}/lista/id/${id}`;
    return this.http.get<Cliente>(url);
  }

  adicionar(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post<Cliente>(url, cliente);
  }

  atualizar(id: number, cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/put/id/${id}`;
    return this.http.put<Cliente>(url, cliente);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}