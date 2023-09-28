import { Component } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent {
  displayedColumns: string[] = ['nome','acoes'];
  produto: Produto[] = []

  constructor(private service: ProdutoService, private router: Router){ }

  ngOnInit(): void{
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.produto = resposta;
    })
  }

  delete(id: String){
    this.service.delete(id).subscribe(() => {
      this.service.mensagem("Produto excluido!")
      this.atualizarPagina();
    }, (error) => {
      this.service.mensagem('Erro ao excluir: ' + error);
    })
  }

  atualizarPagina() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(currentUrl);
    });
  }
}
