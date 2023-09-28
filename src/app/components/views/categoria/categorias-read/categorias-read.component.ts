import { Component } from '@angular/core';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias-read',
  templateUrl: './categorias-read.component.html',
  styleUrls: ['./categorias-read.component.css']
})
export class CategoriasReadComponent {

  categoria: Categoria[] = []
  displayedColumns: string[] = ['nome','descricao', 'acoes'];

  constructor(private service: CategoriaService, private router: Router){ }

  ngOnInit(): void{
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.categoria = resposta;
    })
  }

  delete(id: string){
    this.service.delete(id).subscribe(() => {
      this.service.mensagem("Categoria excluida!")
      this.atualizarPagina();
    }, (error) =>{
      this.service.mensagem('Erro ao excluir: '+ error);
    })
  }

  atualizarPagina() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(currentUrl);
    });
  }

}
