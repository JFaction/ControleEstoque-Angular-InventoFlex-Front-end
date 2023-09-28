import { Categoria } from './../../categoria/categoria.model';
import { Component } from '@angular/core';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '../../fornecedor/fornecedor.model';
import { ProdutoDTO } from '../produtoDTO.model';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent {

  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  categoria: { id: string, nome: string, descricao: string }[] = [];
  fornecedor: Fornecedor[] =[];
  opcaoCategoria: string = '';
  opcaoFornecedor: String = '';

  ngOnInit(): void {
    this.carregarCategorias();
    this.carregarFornecedor();
    
  }

  atualizarCategoria(){
    this.produtoDTO.categoria = this.opcaoCategoria;
  }

  atualizarFornecedor(){
    this.produtoDTO.fornecedor = this.opcaoFornecedor;
  }

  carregarCategorias() {
    this.service.findAllCategorias().subscribe((categorias: { id: string, nome: string, descricao: string }[]) => {
      this.categoria = categorias;
      console.log("Categorias:", this.categoria);
    });
  }
  carregarFornecedor(){
    this.service.findAllFornecedor().subscribe((fornecedor: Fornecedor[]) => {
      this.fornecedor = fornecedor;
    })
  }

  create(): void{

    this.service.create(this.produtoDTO).subscribe((resposta) => {
      this.router.navigate(['produtos'])
      this.service.mensagem('Produto criado');     
    }, err => {
      this.router.navigate(['produtos/adicionar']);
      this.service.mensagem('Erro ao criar Produto');   
    });
  }

  cancel(): void{
    this.router.navigate([`produtos`]);
  }


  produtoDTO: ProdutoDTO = {
    id: "",
    nome: "",
    quantidade: "",
    valor: "",
    categoria: "",
    fornecedor: ""
  }

}
