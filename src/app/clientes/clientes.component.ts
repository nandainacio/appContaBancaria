import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';
import {Cliente} from './clientes.interface';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

  
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

    clientes!: Array<Cliente>;
  
    

    testeForm: FormGroup;
    
    constructor (
      private fb: FormBuilder,
      private clientesService:ClientesService,
      private route:Router,
      ) {}

   

   

  ngOnInit(){

    

    console.log('chamou a get')
    this.clientesService.getClientes()
      .subscribe(response =>{
        console.log(response)
      this.clientes = response;
    }); 

    this.inicializaForm();

  }
 
  
  inicializaForm() {
    this.testeForm = this.fb.group({
      cliente: ['', Validators.required]
    })
  }

  get cliente() {
    console.log('valor do cliente: ' + this.testeForm.get('cliente').value);
    return this.testeForm.get('cliente').value;
  }

  onSubmit(){
    let clienteId = this.testeForm.get('cliente').value;
    console.log('Valor do DropDown: ' + clienteId);
    this.route.navigate([`usuario/${clienteId}`]);
  }

 
}
