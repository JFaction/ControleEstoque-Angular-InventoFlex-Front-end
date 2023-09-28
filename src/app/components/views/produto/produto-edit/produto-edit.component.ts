import { ProdutoDTO } from '../produtoDTO.model';
import { Component } from '@angular/core';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../categoria/categoria.model';
import { Fornecedor } from '../../fornecedor/fornecedor.model';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent {

  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  categoria: { id: string, nome: string, descricao: string }[] = [];

  fornecedor: Fornecedor[] = [];
  opcaoCategoria: string = '';
  opcaoFornecedor: String = '';
  prod: Produto[] = [];


  ngOnInit(): void {

    this.produto.id = this.route.snapshot.paramMap.get("id")!

    
    this.carregarCategorias();
    this.carregarFornecedor();
    this.findById();
    
  }

  atualizarCategoria(){
    this.produto.categoria.id = this.opcaoCategoria;
  }

  atualizarFornecedor(){
    this.produto.fornecedor.id = this.opcaoFornecedor;
  }
/*
  carregarCategorias(){
    this.service.findAllCategorias().subscribe((categoria: { id: string, nome: string, descricao: string } []) => {
      this.categoria = categoria;
      console.log("Categorias: " + this.categoria);
    })
  }
  */

  atualizarValores(){
    this.produtoDTO.id = this.produto.id;
    this.produtoDTO.nome = this.produto.nome;
    this.produtoDTO.quantidade = this.produto.quantidade;
    this.produtoDTO.valor = this.produto.valor;
    this.produtoDTO.categoria = this.produto.categoria.id!;
    this.produtoDTO.fornecedor = this.produto.fornecedor.id!;
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

  cancel(): void{
    this.router.navigate([`produtos`]);
  }

  findById(): void {
    this.service.findById(this.produto.id!).subscribe((resposta) => {
      this.produto = resposta
      this.opcaoCategoria = this.produto.categoria.id!;
      this.opcaoFornecedor = this.produto.fornecedor.id!;
      console.log("Categoria: " + this.produto.categoria);
      //this.prod = resposta;
      console.log("Valores: " + this.produto.categoria);
    })
  }

  edit(): void{
    this.atualizarValores();
    this.service.update(this.produtoDTO).subscribe((resposta) => {
      this.router.navigate([`produtos`]);
      this.service.mensagem('Produto atualizado!')
    }, err => {
      this.router.navigate([`produtos/editar/${this.produto.id}`]);
      this.service.mensagem('Falha ao atualizar o Produto!')      
    })
  }
  
  produto: Produto = {
    id: "",
    nome: "",
    quantidade: "",
    valor: "",
    categoria: {} as Categoria,
    fornecedor: {} as Fornecedor
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
