// rotaguard.guard.ts

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from 'src/app/Service/Login/login.service';

export const rotaguardGuard: CanActivateFn = (route, state) => {

  let loginService = inject(LoginService);
  let roteador = inject(Router);

  if (loginService.getToken() == null) {
    roteador.navigate(['/login']);
    return false;
  }


  const userRole = loginService.getUserRole();


  const expectedRole = route.data['expectedRole'];

  if (userRole !== expectedRole) {
    roteador.navigate(['/login']); 
    return false;
  }

  return true;
};
