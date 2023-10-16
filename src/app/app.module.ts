import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { BannerComponent } from './Components/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Importe o módulo NgbModule aqui
import { CollapseModule } from 'ngx-bootstrap/collapse'; // Importe o módulo CollapseModule do ngx-bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'; // Importe o módulo BsDropdownModule do ngx-bootstrap

@NgModule({
  declarations: [AppComponent, NavComponent, BannerComponent],
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
