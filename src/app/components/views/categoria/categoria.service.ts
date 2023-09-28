import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../environment/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Categoria[]>{
    const url = `${this.baseUrl}/categoria`
    return this.http.get<Categoria[]>(url)
  }

  findById(id: string):Observable<Categoria>{
    const url = `${this.baseUrl}/categoria/${id}`
    return this.http.get<Categoria>(url)
  }

  create(categoria: Categoria): Observable<Categoria>{
    const url = `${this.baseUrl}/categoria`
    return this.http.post<Categoria>(url, categoria)
  }

  update(categoria: Categoria):Observable<Categoria>{
    const url = `${this.baseUrl}/categoria/${categoria.id}`
    return this.http.put<Categoria>(url, categoria)
  }

  delete(id: string): Observable<any>{
    const url = `${this.baseUrl}/categoria/${id}`;
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
