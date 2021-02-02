import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './clientes.interface';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private API = 'http://localhost:3000/usuarios';
  constructor(
    private http: HttpClient,
    
    ){}


 getClientes(){
   return this.http.get<Cliente[]>('http://localhost:3000/usuarios');
 }
    
 
 postCadastro(cliente:Cliente) {
   return this.http.post<Cliente[]>('http://localhost:3000/usuarios' , cliente);
 }
    
 deleteCadastro(cliente:Cliente) {
  return this.http.delete<Cliente[]>('http://localhost:3000/usuarios');
}





  }

