import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-edit',
  templateUrl: './fornecedor-edit.component.html',
  styleUrls: ['./fornecedor-edit.component.css']
})
export class FornecedorEditComponent implements OnInit{

  constructor(
    private service: FornecedorService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {

    this.fornecedor.id = this.route.snapshot.paramMap.get("id")!

    this.findById();
    
  }

  cancel(): void{
    this.router.navigate([`fornecedores`]);
  }

  findById(): void {
    this.service.findById(this.fornecedor.id!).subscribe((resposta) => {
      this.fornecedor = resposta
    })
  }

  edit(): void{
    this.service.update(this.fornecedor).subscribe((resposta) => {
      this.router.navigate([`fornecedores`]);
      this.service.mensagem('Fornecedor atualizado!')
    }, err => {
      this.router.navigate([`fornecedor/edit/${this.fornecedor.id}`]);
      this.service.mensagem('Falha ao atualizar o Fornecedor!')      
    })
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
