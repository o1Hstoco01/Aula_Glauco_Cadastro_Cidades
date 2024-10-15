import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from './cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {


  constructor(private http:HttpClient) { }

  getCidades(): Observable<Cidade []>{
    return this.http.get<Cidade []>('http://localhost:3000/cidades')
  }

  getCidadeById(id:number): Observable<Cidade>{
    return this.http.get<Cidade>('http://localhost:4200/cidade/' + id);
  }

  delete(cidade: Cidade): Observable<void>{
    return this.http.delete<void>('http://localhost:3000/cidades/' + cidade.id)
  }
}
