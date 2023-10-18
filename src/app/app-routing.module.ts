import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCadastroComponent } from './Components/cliente-cadastro/cliente-cadastro.component';
import { FuncionarioComponent } from './Components/funcionario-Cadastro/funcionario.component';
import { BannerComponent } from './Components/banner/banner.component';
import { BebidaComponent } from './Components/bebida/bebida.component';
import { ComidaComponent } from './Components/comida/comida.component';

import { PedidosListComponent } from './Components/Listar/pedidos-list/pedidos-list.component';
import { ComidaListComponent } from './Components/Listar/comida-list/comida-list.component';
import { BebidaListComponent } from './Components/Listar/bebida-list/bebida-list.component';
import { FuncionarioListComponent } from './Components/Listar/funcionario-list/funcionario-list.component';
import { ClienteListComponent } from './Components/Listar/cliente-list/cliente-list.component';

const routes: Routes = [  { path: '', component: BannerComponent },
{ path: 'cliente', component: ClienteCadastroComponent },
{ path: 'funcionario', component: FuncionarioComponent },
{ path: 'bebida', component: BebidaComponent },
{ path: 'comida', component: ComidaComponent },
{ path: 'clienteList', component: ClienteListComponent },
{ path: 'funcionarioList', component: FuncionarioListComponent },
{ path: 'bebidaList', component: BebidaListComponent },
{ path: 'comidaList', component: ComidaListComponent },
{ path: 'pedidoList', component: PedidosListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
