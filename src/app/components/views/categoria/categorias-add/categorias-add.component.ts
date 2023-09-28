import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categorias-add',
  templateUrl: './categorias-add.component.html',
  styleUrls: ['./categorias-add.component.css']
})
export class CategoriasAddComponent implements OnInit{
  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {

    
  }

  create(): void{
    this.service.create(this.categoria).subscribe((resposta) => {
      this.router.navigate(['categorias'])
      this.service.mensagem('Categoria criada');     
    }, err => {
      this.router.navigate(['categoria/adicionar']);
      this.service.mensagem('Erro ao criar Categoria');   
    });
  }

  cancel(): void{
    this.router.navigate([`categorias`]);
  }


  categoria: Categoria = {
    id: "",
    nome: "",
    descricao: ""
  }
}
