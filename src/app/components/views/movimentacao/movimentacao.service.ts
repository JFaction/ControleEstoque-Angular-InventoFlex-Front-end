import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Produto } from '../produto/produto.model';
import { Fornecedor } from '../fornecedor/fornecedor.model';
import { MovimentacaoDTO } from './MovimentacaoDTO.model';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAllProdutos():Observable<Produto[]>{
    const url = `${this.baseUrl}/produto`
    return this.http.get<Produto[]>(url)
  }
  
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

  create(movimentacaoDTO: MovimentacaoDTO): Observable<MovimentacaoDTO>{
    const url = `${this.baseUrl}/movimentacao`
    return this.http.post<MovimentacaoDTO>(url, movimentacaoDTO)
  }



  mensagem(str: String): void{
    this._snack.open(`${str}`, 'OK',{
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
