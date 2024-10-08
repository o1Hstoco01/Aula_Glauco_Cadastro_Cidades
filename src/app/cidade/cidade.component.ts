import { Component, OnInit } from '@angular/core';
import { Cidade } from '../cidade';
import { CidadeService } from '../cidade.service';


@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrl: './cidade.component.css'
})
export class CidadeComponent implements OnInit{
  cidades: Cidade  [] = [];

  constructor(private servise: CidadeService){}

  ngOnInit(): void {
   this.loadCidades();
  }
  
  loadCidades(){
    this.servise.getCidades().subscribe({
      next: data => this.cidades = data
    });
  }

}
