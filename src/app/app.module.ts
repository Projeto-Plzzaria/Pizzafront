import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { BannerComponent } from './Components/banner/banner.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ClienteCadastroComponent } from './Components/cliente-cadastro/cliente-cadastro.component';
import { FuncionarioComponent } from './Components/funcionario-Cadastro/funcionario.component';
import { BebidaComponent } from './Components/bebida/bebida.component';
import { ComidaComponent } from './Components/comida/comida.component';
import { EnderecoComponent } from './Components/endereco/endereco.component';
import { PedidosListComponent } from './Components/Listar/pedidos-list/pedidos-list.component';
import { ComidaListComponent } from './Components/Listar/comida-list/comida-list.component';
import { BebidaListComponent } from './Components/Listar/bebida-list/bebida-list.component';
import { FuncionarioListComponent } from './Components/Listar/funcionario-list/funcionario-list.component';
import { ClienteListComponent } from './Components/Listar/cliente-list/cliente-list.component';
import { PedidoComponent } from './Components/pedido/pedido.component';


@NgModule({
  declarations: [AppComponent, NavComponent, BannerComponent, ClienteCadastroComponent, FuncionarioComponent, BebidaComponent, ComidaComponent, EnderecoComponent, PedidosListComponent, ComidaListComponent, BebidaListComponent, FuncionarioListComponent, ClienteListComponent, PedidoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule,
    CollapseModule.forRoot(), // Adicione o módulo CollapseModule aqui
    BsDropdownModule.forRoot(), // Adicione o módulo BsDropdownModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
