import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { BannerComponent } from './Components/banner/banner.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {  ClienteComponent } from './Components/cliente-cadastro/cliente-cadastro.component';
import { FormsModule } from '@angular/forms';
import { BebidaComponent } from './Components/bebida/bebida.component';
import { ComidaComponent } from './Components/comida/comida.component';

 
import { HttpClientModule } from '@angular/common/http';
import { EnderecosComponent } from './Components/enderecos/enderecos.component';
import { BebidaCadastroComponent } from './Components/post/bebida-cadastro/bebida-cadastro.component';
import { ComidaCadastroComponent } from './Components/post/comida-cadastro/comida-cadastro.component';
import { FuncionarioCadastroComponent } from './Components/post/funcionario-cadastro/funcionario-cadastro.component';
import { EnderecoCadastroComponent } from './Components/post/endereco-cadastro/endereco-cadastro.component';
import { PedidoCadastroComponent } from './Components/post/pedido-cadastro/pedido-cadastro.component';
import { PedidoComponent } from './Components/pedido/pedido.component';
import { FuncionarioComponent } from './Components/funcionario/funcionario.component';
import { ClienteCadastroComponent } from './Components/post/cliente-cadastro/cliente-cadastro.component';
import { LoginComponent } from './Components/login/login.component';



//import { MatCardModule } from '@angular/material/card';
//import { MatTableModule } from '@angular/material/table';


 



 
@NgModule({

  declarations: [AppComponent, NavComponent, BannerComponent, ClienteComponent, ClienteCadastroComponent , BebidaComponent, BebidaComponent, ComidaComponent, EnderecosComponent, BebidaCadastroComponent, ComidaCadastroComponent, FuncionarioCadastroComponent, FuncionarioComponent, EnderecoCadastroComponent, PedidoCadastroComponent, PedidoComponent, LoginComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    HttpClientModule,
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
