import { Component } from '@angular/core';
import { MovimentacaoDTO } from '../MovimentacaoDTO.model';
import { Fornecedor } from '../../fornecedor/fornecedor.model';
import { MovimentacaoService } from '../movimentacao.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movimentacao-create',
  templateUrl: './movimentacao-create.component.html',
  styleUrls: ['./movimentacao-create.component.css']
})
export class MovimentacaoCreateComponent {
  constructor(
    private service: MovimentacaoService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  categoria: { id: string, nome: string, descricao: string }[] = [];
  fornecedor: Fornecedor[] =[];
  tipoMovimento: { nome: string }[] = [
    { nome: "Credito" },
    { nome: "Debito" },
    { nome: "Dinheiro" },
    { nome: "Pix" },
  ]
  opcaoCategoria: string = '';
  opcaoFornecedor: string = '';

  ngOnInit(): void {
    this.carregarCategorias();
    this.carregarFornecedor();
    
  }

  atualizarFornecedor(){
    this.movimentacaoDTO.fornecedor = this.opcaoFornecedor;
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

    this.service.create(this.movimentacaoDTO).subscribe((resposta) => {
      this.router.navigate(['movimentacao'])
      this.service.mensagem('Movimentação efetuada');     
    }, err => {
      this.router.navigate(['movimentacao']);
      this.service.mensagem('Erro ao criar movimentação');   
    });
  }



  movimentacaoDTO: MovimentacaoDTO = {
    id: "",
    tipoMovimento: "",
    tipoPagamento: "",
    produto: "",
    fornecedor: "",
    quantidade: "",
    data: null
  }
}
