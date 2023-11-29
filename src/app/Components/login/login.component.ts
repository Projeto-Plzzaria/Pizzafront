import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/Login';
import { User } from 'src/app/Models/User';
import { LoginService } from 'src/app/Service/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login: Login = new Login();
  user: User = new User();
  showRoleInput: boolean = false;
  alerta: { tipo: string, mensagem: string } | null = null; // Adicionado
  exibirRoleSelect: boolean = false;

  @Output() retorno: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginService.removerToken();
    this.verificarURL();
  }

  ngOnInit() {
    this.verificarURL();
  }

  verificarURL() {
    const currentUrl = this.router.url;
    this.exibirRoleSelect = currentUrl === '/admin/registro';
  }

  salvar() {
    if (!this.user.role) {
      this.user.role = 'USER';
    }

    this.loginService.adicionar(this.user).subscribe({
      next: (user) => {
        console.log('ESTA VIVO!!!!');
        this.retorno.emit(user);
        alert('Registro bem-sucedido!');
        setTimeout(() => {
          this.alerta = null;
        }, 5000);
      },
      error: (erro) => {
        console.log('teste erro');
        console.error(erro);
        alert('Falha no registro. Por favor, tente novamente.');
        
        setTimeout(() => {
          this.alerta = null;
        }, 5000);
      },
    });
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

  toggleRoleInput() {
    this.showRoleInput = !this.showRoleInput;
  }
}
