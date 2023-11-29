import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestInterceptor implements HttpInterceptor {

  router = inject(Router);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: { Authorization: 'Bearer ' + token }
      });
    }

    return next.handle(request).pipe(catchError(x => this.errorHandler(x)));
  }

  private errorHandler(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401) {
      this.showAlert('Problema nas credenciais de acesso', 'Erro 401', 'alert-danger');
      this.router.navigate(['/login']);
      return of(err.message);
    } else if (err.status === 403) {
      this.showAlert('Erro nas credenciais', 'Erro 403', 'alert-danger');
      return of(err.message);
    }
    // Tratamento para outros erros
    this.showAlert('Ocorreu um erro inesperado', 'Erro', 'alert-danger');
    return throwError(() => err);
  }

  private showAlert(message: string, header: string, cssClass: string): void {
    const alert = document.createElement('div');
    alert.className = `alert ${cssClass}`;
    alert.innerHTML = `<strong>${header}:</strong> ${message}`;
    document.body.appendChild(alert);

    // Remove o alerta após 5 segundos
    setTimeout(() => {
      alert.remove();
    }, 5000);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
