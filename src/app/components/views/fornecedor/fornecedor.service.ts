import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Fornecedor } from './fornecedor.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Fornecedor[]>{
    const url = `${this.baseUrl}/fornecedor`
    return this.http.get<Fornecedor[]>(url)
  }

  findById(id: String):Observable<Fornecedor>{
    const url = `${this.baseUrl}/fornecedor/${id}`
    return this.http.get<Fornecedor>(url)
  }

  create(fornecedor: Fornecedor): Observable<Fornecedor>{
    const url = `${this.baseUrl}/fornecedor`
    return this.http.post<Fornecedor>(url, fornecedor)
  }

  update(fornecedor: Fornecedor):Observable<Fornecedor>{
    const url = `${this.baseUrl}/fornecedor/${fornecedor.id}`
    return this.http.put<Fornecedor>(url, fornecedor)
  }

  delete(id: String): Observable<any>{
    const url = `${this.baseUrl}/fornecedor/${id}`;
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
