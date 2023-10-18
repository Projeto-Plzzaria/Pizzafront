import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { BannerComponent } from './Components/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Importe o módulo NgbModule aqui
import { CollapseModule } from 'ngx-bootstrap/collapse'; // Importe o módulo CollapseModule do ngx-bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BebidaComponent } from './Models/bebida/bebida.component';
import { CargoComponent } from './Models/cargo/cargo.component';
import { CLienteComponent } from './Models/cliente/cliente.component';
import { ComidaComponent } from './Models/comida/comida.component';
import { EnderecoComponent } from './Models/endereco/endereco.component';
import { FuncionarioComponent } from './Models/funcionario/funcionario.component';
import { PedidoComponent } from './Models/pedido/pedido.component';
import { PessoaComponent } from './Models/pessoa/pessoa.component'; // Importe o módulo BsDropdownModule do ngx-bootstrap

@NgModule({
  declarations: [AppComponent, NavComponent, BannerComponent, BebidaComponent, CargoComponent, CLienteComponent, ComidaComponent, EnderecoComponent, FuncionarioComponent, PedidoComponent, PessoaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CollapseModule.forRoot(), // Adicione o módulo CollapseModule aqui
    BsDropdownModule.forRoot(), // Adicione o módulo BsDropdownModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
