import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ClientesService } from './clientes/clientes.service';
import { CadastroComponent } from './cadastro/cadastro.component'

import { UsuarioComponent } from './usuario/usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ClientesComponent,
    CadastroComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
    
   
    
    
    
    
   
    
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent],
})
export class AppModule { }
