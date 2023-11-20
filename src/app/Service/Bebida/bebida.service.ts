import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bebida } from 'src/app/Models/Bebida';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {
  private baseUrl = 'http://localhost:8080/api/Bebida'; 

  constructor(private http: HttpClient) { }

  listar(): Observable<Bebida[]> {
    const url = `${this.baseUrl}/lista`;
    return this.http.get<Bebida[]>(url);
  }
  
  getPorId(id: number): Observable<Bebida> {
    const url = `${this.baseUrl}/id/${id}`;
    return this.http.get<Bebida>(url);
  }
  
  adicionar(bebida: Bebida): Observable<Bebida> {
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post<Bebida>(url, bebida);
  }
  
  atualizar(id: number, bebida: Bebida): Observable<Bebida> {
    const url = `${this.baseUrl}/put/id/${id}`;
    return this.http.put<Bebida>(url, bebida);
  }
  
  excluir(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}