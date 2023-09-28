import { CategoriasReadComponent } from './components/views/categoria/categorias-read/categorias-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { FornecedorReadComponent } from './components/views/fornecedor/fornecedor-read/fornecedor-read.component';
import { FornecedorEditComponent } from './components/views/fornecedor/fornecedor-edit/fornecedor-edit.component';
import { FornecedorAddComponent } from './components/views/fornecedor/fornecedor-add/fornecedor-add.component';
import { CategoriasAddComponent } from './components/views/categoria/categorias-add/categorias-add.component';
import { CategoriasEditComponent } from './components/views/categoria/categorias-edit/categorias-edit.component';
import { ProdutoReadComponent } from './components/views/produto/produto-read/produto-read.component';
import { ProdutoCreateComponent } from './components/views/produto/produto-create/produto-create.component';
import { ProdutoEditComponent } from './components/views/produto/produto-edit/produto-edit.component';
import { MovimentacaoCreateComponent } from './components/views/movimentacao/movimentacao-create/movimentacao-create.component';

const routes: Routes = [

{
  path: '',
  component: HomeComponent
},
{
  path: 'fornecedores',
  component: FornecedorReadComponent
},
{
  path: 'fornecedores/editar/:id',
  component: FornecedorEditComponent
},
{
  path: 'fornecedores/adicionar',
  component: FornecedorAddComponent
},
{
  path: 'categorias',
  component: CategoriasReadComponent
},
{
  path: 'categorias/adicionar',
  component: CategoriasAddComponent
},
{
path: 'categorias/editar/:id',
component: CategoriasEditComponent
},
{
path: 'produtos',
component: ProdutoReadComponent
},
{
path: 'produtos/adicionar',
component: ProdutoCreateComponent
},
{
path: 'produtos/editar/:id',
component: ProdutoEditComponent
},
{
path: 'movimentacao/adicionar',
component: MovimentacaoCreateComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
