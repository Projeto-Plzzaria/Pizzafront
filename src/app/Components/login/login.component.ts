import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/Login';
import { LoginService } from 'src/app/Service/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login: Login = new Login();

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginService.removerToken();
  }

  logar() {
    console.log('teste');
    this.loginService.logar(this.login).subscribe({
      next: (user) => {
        console.log(user.token);
        this.loginService.addToken(user.token);
        const userRole = this.loginService.getUserRole();
        if (userRole === 'ADMIN') {
          this.router.navigate(['/admin/cliente']);
        } else if (userRole === 'USER') {
          this.router.navigate(['/user/pedido']);
        } else {
          console.error('Função do usuário desconhecida:', userRole);
        }
      },
      error: (erro) => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      },
    });
  }
}
