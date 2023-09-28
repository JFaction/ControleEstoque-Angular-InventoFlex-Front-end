import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Categoria } from '../categoria/categoria.model';
import { Fornecedor } from '../fornecedor/fornecedor.model';
import { ProdutoDTO } from './produtoDTO.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Produto[]>{
    const url = `${this.baseUrl}/produto`
    return this.http.get<Produto[]>(url)
  }

  /*findAllCategoriass():Observable<Categoria[]>{
    const url = `${this.baseUrl}/categoria`
    return this.http.get<Categoria[]>(url)
  }*/

  findAllCategorias(): Observable<{ id: string, nome: string, descricao: string }[]> {
    const url = `${this.baseUrl}/categoria`;
    return this.http.get<{ id: string, nome: string, descricao: string }[]>(url);
  }
  

  findAllFornecedor():Observable<Fornecedor[]>{
    const url = `${this.baseUrl}/fornecedor`
    return this.http.get<Fornecedor[]>(url)
  }

  findById(id: String):Observable<Produto>{
    const url = `${this.baseUrl}/produto/${id}`
    return this.http.get<Produto>(url)
  }

  create(produto: ProdutoDTO): Observable<ProdutoDTO>{
    const url = `${this.baseUrl}/produto`
    return this.http.post<ProdutoDTO>(url, produto)
  }

  update(produto: ProdutoDTO):Observable<ProdutoDTO>{
    const url = `${this.baseUrl}/produto/${produto.id}`
    return this.http.put<ProdutoDTO>(url, produto)
  }

  delete(id: String): Observable<any>{
    const url = `${this.baseUrl}/produto/${id}`;
    return this.http.delete(url);
  }

  mensagem(str: String): void{
    this._snack.open(`${str}`, 'OK',{
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
