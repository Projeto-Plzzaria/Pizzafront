import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  private baseUrl = 'http://localhost:8080/api/Endereco'; 

  constructor(private http: HttpClient) { }

  listar(): Observable<any[]> {
    const url = `${this.baseUrl}/lista`;
    return this.http.get<any[]>(url);
  }

  getPorId(id: number): Observable<any> {
    const url = `${this.baseUrl}/lista/id/${id}`;
    return this.http.get<any>(url);
  }

  adicionar(Endereco: any): Observable<any> {
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post(url, Endereco);
  }

  atualizar(id: number, Endereco: any): Observable<any> {
    const url = `${this.baseUrl}/put/id/${id}`;
    return this.http.put(url, Endereco);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}