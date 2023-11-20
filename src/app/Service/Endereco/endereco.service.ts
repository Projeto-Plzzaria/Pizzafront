import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from 'src/app/Models/Endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  private baseUrl = 'http://localhost:8080/api/Endereco'; 

  constructor(private http: HttpClient) { }

  listar(): Observable<Endereco[]> {
    const url = `${this.baseUrl}/lista`;
    return this.http.get<Endereco[]>(url);
  }

  getPorId(id: number): Observable<Endereco> {
    const url = `${this.baseUrl}/lista/id/${id}`;
    return this.http.get<Endereco>(url);
  }

  adicionar(endereco: Endereco): Observable<Endereco> {
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post<Endereco>(url, endereco);
  }

  atualizar(id: number, endereco: Endereco): Observable<Endereco> {
    const url = `${this.baseUrl}/put/id/${id}`;
    return this.http.put<Endereco>(url, endereco);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}