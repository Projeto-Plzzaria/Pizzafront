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

const routes: Routes = [  { path: '', component: BannerComponent },
{ path: 'cliente', component: ClienteComponent },
{ path: 'bebida', component: BebidaComponent },
{ path: 'comida', component: ComidaComponent },
{ path: 'funcionario', component: FuncionarioComponent },
{path: 'endereco', component: EnderecosComponent},
{ path: 'bebidaadd', component: BebidaCadastroComponent },
{ path: 'pedido', component: PedidoComponent }];


/*const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  {
    path: "admin", component: IndexComponent, canActivate: [rotaguardGuard], children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "pedidos", component: PedidoslistComponent },
      { path: "produtos", component: ProdutoslistComponent },
      { path: "sabores", component: SaboreslistComponent },
      { path: "drag", component: DragComponent },
    ]
  }

];
 */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
