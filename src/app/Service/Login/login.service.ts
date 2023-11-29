import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Login } from 'src/app/Models/Login';
import { User } from 'src/app/Models/User';
import { Observable } from 'rxjs';
import { jwtDecode, JwtPayload } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getUserRole(): string | undefined {
    const decodedToken = this.jwtDecode();
    return decodedToken ? (decodedToken as User).role : undefined;
  }
  API: string = 'http://localhost:8080/auth';
  http = inject(HttpClient);

  constructor() { }


  deslogar(): Observable<any> {
    return this.http.get<any>(this.API + '/deslogar');
  }

  addToken(token: string) {
    localStorage.setItem('token', token);
  }

  removerToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }


 
  hasPermission(role: string): boolean {
    const user = this.jwtDecode() as User | undefined;
    return user?.role === role;
  }
  


  // ...

  logar(login: Login): Observable<User> {
    return this.http.post<User>(this.API+'/login', login);
  }
  registro(login: Login): Observable<User> {
    return this.http.post<User>(this.API+'/registro', login);
  }
  adicionar(user: User): Observable<User> {
    const url = `${this.API}/register`;
    return this.http.post<User>(url, user);
  }
  
  


  jwtDecode(): JwtPayload | undefined {
    let token = this.getToken();
    if (token) {
      const decodedToken = jwtDecode<JwtPayload>(token);
      console.log('Decoded Token:', decodedToken); // Adicione esta linha para verificar o token decodificado
      return decodedToken;
    }
    return undefined;
  }
  

}
  


