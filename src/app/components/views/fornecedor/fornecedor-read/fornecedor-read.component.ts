import { Component } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class FornecedorReadComponent {

  displayedColumns: string[] = ['nome','cnpj','acoes'];
  fornecedor: Fornecedor[] = []

  constructor(private service: FornecedorService, private router: Router){ }

  ngOnInit(): void{
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.fornecedor = resposta;
    })
  }

  delete(id: String){
    this.service.delete(id).subscribe(() => {
      this.service.mensagem("Fornecedor excluido!")
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
