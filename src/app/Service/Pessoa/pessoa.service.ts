import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from 'src/app/Models/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private baseUrl = 'http://localhost:8080/api/pessoa'; 

  constructor(private http: HttpClient) { }

  listar(): Observable<Pessoa[]> {
    const url = `${this.baseUrl}/listar`;
    return this.http.get<Pessoa[]>(url);
  }

  getPorId(id: number): Observable<Pessoa> {
    const url = `${this.baseUrl}/id/${id}`;
    return this.http.get<Pessoa>(url);
  }

  adicionar(pessoa: Pessoa): Observable<Pessoa> {
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post<Pessoa>(url, pessoa);
  }

  atualizar(id: number, pessoa: Pessoa): Observable<Pessoa> {
    const url = `${this.baseUrl}/put/${id}`;
    return this.http.put<Pessoa>(url, pessoa);
  }

  excluir(id: number): Observable<void> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete<void>(url);
  }
}