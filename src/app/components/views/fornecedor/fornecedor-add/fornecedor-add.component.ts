import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '../fornecedor.model';

@Component({
  selector: 'app-fornecedor-add',
  templateUrl: './fornecedor-add.component.html',
  styleUrls: ['./fornecedor-add.component.css']
})
export class FornecedorAddComponent implements OnInit {

  constructor(
    private service: FornecedorService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {

    
  }

  create(): void{
    this.service.create(this.fornecedor).subscribe((resposta) => {
      this.router.navigate(['fornecedores'])
      this.service.mensagem('Fornecedor criado');     
    }, err => {
      this.router.navigate(['fornecedor/adicionar']);
      this.service.mensagem('Erro ao criar Fornecedor');   
    });
  }

  cancel(): void{
    this.router.navigate([`fornecedores`]);
  }


  fornecedor: Fornecedor = {
    id: "",
    nome: "",
    cnpj: "",
    cep: "",
    estado: "",
    municipio: "",
    logradouro: "",
    numero: ""
  }

}
