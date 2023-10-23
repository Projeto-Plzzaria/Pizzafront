import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { BannerComponent } from './Components/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Importe o módulo NgbModule aqui
import { CollapseModule } from 'ngx-bootstrap/collapse'; // Importe o módulo CollapseModule do ngx-bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ClienteCadastroComponent } from './Components/cliente-cadastro/cliente-cadastro.component';
import { FuncionarioComponent } from './Components/funcionario-Cadastro/funcionario.component';
import { BebidaComponent } from './Components/bebida/bebida.component';
import { ComidaComponent } from './Components/comida/comida.component';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { EnderecosComponent } from './Components/enderecos/enderecos.component';





@NgModule({
  declarations: [AppComponent, NavComponent, BannerComponent, ClienteCadastroComponent, FuncionarioComponent, BebidaComponent, ComidaComponent, EnderecosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    CollapseModule.forRoot(), // Adicione o módulo CollapseModule aqui
    BsDropdownModule.forRoot(), // Adicione o módulo BsDropdownModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
