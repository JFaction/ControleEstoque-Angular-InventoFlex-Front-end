import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FornecedorReadComponent } from './components/views/fornecedor/fornecedor-read/fornecedor-read.component';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FornecedorEditComponent } from './components/views/fornecedor/fornecedor-edit/fornecedor-edit.component';
import { FornecedorAddComponent } from './components/views/fornecedor/fornecedor-add/fornecedor-add.component';
import { CategoriasReadComponent } from './components/views/categoria/categorias-read/categorias-read.component';
import { CategoriasAddComponent } from './components/views/categoria/categorias-add/categorias-add.component';
import { CategoriasEditComponent } from './components/views/categoria/categorias-edit/categorias-edit.component';
import { ProdutoReadComponent } from './components/views/produto/produto-read/produto-read.component';
import { ProdutoCreateComponent } from './components/views/produto/produto-create/produto-create.component';
import { ProdutoEditComponent } from './components/views/produto/produto-edit/produto-edit.component';
import { MovimentacaoCreateComponent } from './components/views/movimentacao/movimentacao-create/movimentacao-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FornecedorReadComponent,
    FornecedorEditComponent,
    FornecedorAddComponent,
    CategoriasReadComponent,
    CategoriasAddComponent,
    CategoriasEditComponent,
    ProdutoReadComponent,
    ProdutoCreateComponent,
    ProdutoEditComponent,
    MovimentacaoCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule, 
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }