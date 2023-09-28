import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categorias-edit',
  templateUrl: './categorias-edit.component.html',
  styleUrls: ['./categorias-edit.component.css']
})
export class CategoriasEditComponent {
  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {

    this.categoria.id = this.route.snapshot.paramMap.get("id")!

    this.findById();
    
  }

  cancel(): void{
    this.router.navigate([`categorias`]);
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria = resposta
    })
  }

  edit(): void{
    this.service.update(this.categoria).subscribe((resposta) => {
      this.router.navigate([`categorias`]);
      this.service.mensagem('Categoria atualizada!')
    }, err => {
      this.router.navigate([`categoria/edit/${this.categoria.id}`]);
      this.service.mensagem('Falha ao atualizar a Categoria!')      
    })
  }

  
  categoria: Categoria = {
    id: "",
    nome: "",
    descricao: ""
  }
}
