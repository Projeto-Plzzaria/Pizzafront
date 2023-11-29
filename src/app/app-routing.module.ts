import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  ClienteComponent } from './Components/cliente-cadastro/cliente-cadastro.component';

import { BannerComponent } from './Components/banner/banner.component';
import { BebidaComponent } from './Components/bebida/bebida.component';
import { ComidaComponent } from './Components/comida/comida.component';

import { EnderecosComponent } from './Components/enderecos/enderecos.component';
import { PedidoComponent } from './Components/pedido/pedido.component';
import { FuncionarioComponent } from './Components/funcionario/funcionario.component';
import { BebidaCadastroComponent } from './Components/post/bebida-cadastro/bebida-cadastro.component';
import { LoginComponent } from './Components/login/login.component';
import { rotaguardGuard } from './Components/login/guards/guards.service';

import { AppComponent } from 'src/app/app.component';
import { IndexComponent } from './Components/layout/index/index.component';


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  {
    path: "admin", component: IndexComponent, canActivate: [rotaguardGuard], data: { expectedRole: 'ADMIN' }, children: [
      { path: 'cliente', component: ClienteComponent },
      { path: 'bebida', component: BebidaComponent },
      { path: 'comida', component: ComidaComponent },
      { path: 'funcionario', component: FuncionarioComponent },
      { path: 'endereco', component: EnderecosComponent },
      { path: 'bebidaadd', component: BebidaCadastroComponent },
      { path: 'pedido', component: PedidoComponent },
      { path: 'registro', component: LoginComponent },
    ],
  },
  {
    path: "user", component: IndexComponent, canActivate: [rotaguardGuard], data: { expectedRole: 'USER' }, children: [
      { path: 'pedido', component: PedidoComponent },
    ],
  },
];






@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
