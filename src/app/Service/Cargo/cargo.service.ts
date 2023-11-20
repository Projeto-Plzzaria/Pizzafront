import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cargo } from 'src/app/Models/Cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  private baseUrl = 'http://localhost:8080/api/cargo'; 

  constructor(private http: HttpClient) { }

  listar(): Observable<Cargo[]> {
    const url = `${this.baseUrl}/listar`;
    return this.http.get<Cargo[]>(url);
  }

  getPorId(id: number): Observable<Cargo> {
    const url = `${this.baseUrl}/id/${id}`;
    return this.http.get<Cargo>(url);
  }

  adicionar(cargo: Cargo): Observable<Cargo> {
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post<Cargo>(url, cargo);
  }

  atualizar(id: number, cargo: Cargo): Observable<Cargo> {
    const url = `${this.baseUrl}/put/${id}`;
    return this.http.put<Cargo>(url, cargo);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}