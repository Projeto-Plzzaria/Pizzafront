import { Component } from '@angular/core';
import { LoginService } from 'src/app/Service/Login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  
  isCollapsed = true;

  constructor(public loginService: LoginService) {}
}
