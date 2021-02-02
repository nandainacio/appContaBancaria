import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ClientesComponent } from './clientes/clientes.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [{
  path: 'cadastro',
  component: CadastroComponent,
},{
  path:'' ,
  component: ClientesComponent,
},{
  path:'usuario/:id',
  component: UsuarioComponent,
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
