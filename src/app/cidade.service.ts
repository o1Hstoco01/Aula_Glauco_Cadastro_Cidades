import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from './cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  url = 'http://localhost:3000/cidades'

  constructor(private http:HttpClient) { }

  getCidades(): Observable<Cidade []>{
    return this.http.get<Cidade []>(this.url)
  }

  getCidadeById(id:number): Observable<Cidade>{
    return this.http.get<Cidade>(`${this.url}/${id}`);
  }

  delete(cidade: Cidade): Observable<void>{
    return this.http.delete<void>(`${this.url}/${cidade.id}`)
  }

  update(cidade: Cidade): Observable<Cidade>{
    return this.http.put<Cidade>(`${this.url}/${cidade.id}`, cidade);
  }

  save(cidade: Cidade): Observable<Cidade>{
    return this.http.post<Cidade>(this.url, cidade);
  }
}
