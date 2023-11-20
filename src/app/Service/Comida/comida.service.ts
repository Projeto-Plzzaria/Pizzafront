import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comida } from 'src/app/Models/Comida';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {
  private baseUrl = 'http://localhost:8080/api/Comida'; 

  constructor(private http: HttpClient) { }

  listar(): Observable<Comida[]> {
    const url = `${this.baseUrl}/lista`;
    return this.http.get<Comida[]>(url);
  }

  getPorId(id: number): Observable<Comida> {
    const url = `${this.baseUrl}/lista/id/${id}`;
    return this.http.get<Comida>(url);
  }

  adicionar(comida: Comida): Observable<Comida> {
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post<Comida>(url, comida);
  }

  atualizar(id: number, comida: Comida): Observable<Comida> {
    const url = `${this.baseUrl}/put/id/${id}`;
    return this.http.put<Comida>(url, comida);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}