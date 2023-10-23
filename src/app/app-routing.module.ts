import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCadastroComponent } from './Components/cliente-cadastro/cliente-cadastro.component';
import { FuncionarioComponent } from './Components/funcionario-Cadastro/funcionario.component';
import { BannerComponent } from './Components/banner/banner.component';
import { BebidaComponent } from './Components/bebida/bebida.component';
import { ComidaComponent } from './Components/comida/comida.component';
import { EnderecosComponent } from './Components/enderecos/enderecos.component';
const routes: Routes = [  { path: '', component: BannerComponent },
{ path: 'cliente', component: ClienteCadastroComponent },
{ path: 'funcionario', component: FuncionarioComponent },
{ path: 'bebida', component: BebidaComponent },
{ path: 'comida', component: ComidaComponent },
{path: 'endereco', component: EnderecosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
