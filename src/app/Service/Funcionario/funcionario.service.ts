import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/Models/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private baseUrl = 'http://localhost:8080/api/Funcionario'; 

  constructor(private http: HttpClient) { }

  listar(): Observable<Funcionario[]> {
    const url = `${this.baseUrl}/lista`;
    return this.http.get<Funcionario[]>(url);
  }

  getPorId(id: number): Observable<Funcionario> {
    const url = `${this.baseUrl}/lista/id/${id}`;
    return this.http.get<Funcionario>(url);
  }

  adicionar(funcionario: Funcionario): Observable<Funcionario> {
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post<Funcionario>(url, funcionario);
  }

  atualizar(id: number, funcionario: Funcionario): Observable<Funcionario> {
    const url = `${this.baseUrl}/put/id/${id}`;
    return this.http.put<Funcionario>(url, funcionario);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}