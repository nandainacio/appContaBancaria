import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ClientesService } from '../clientes/clientes.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private clienteService:ClientesService,
   
  ) { }

  ngOnInit():void {
      this.cadastroForm = this.formBuilder.group({
      nome:['' ,Validators.required],
      cpf:['',[Validators.required, Validators.minLength(11)&&Validators.maxLength(11)]],
      email:['', [Validators.required, Validators.email]],
      senha:['', Validators.required],
    });

    
    
  }

    exibeErro(nomeControle:string){
    if(!this.cadastroForm.controls[nomeControle]){
      return false;
    
    }
    return this.cadastroForm.controls[nomeControle].invalid && this.cadastroForm.controls[nomeControle].touched;
  }

    onSubmit(){
      if (this.cadastroForm.invalid) {
        this.cadastroForm.controls.nome.markAsTouched();
        this.cadastroForm.controls.cpf.markAsTouched();
        this.cadastroForm.controls.email.markAsTouched();
        this.cadastroForm.controls.senha.markAsTouched();
        

        return;
      }
      this.salvarCadastro();
    }


    salvarCadastro(){
      
      this.clienteService.postCadastro(this.cadastroForm.value)
      .subscribe(
        response => this.onSuccessSalvarCadastro(),
        error => this.onErrorSalvarCadastro(),
      );
    
    
    
    }

    onSuccessSalvarCadastro(){
      console.log('Sucesso!', 'Cadastro salvo com sucesso.')
    }



    onErrorSalvarCadastro() {
      console.log('Sucesso!', 'Cadastro salvo com sucesso.')
    }

}
