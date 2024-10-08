import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../cidade.service';
import { Cidade } from '../cidade';


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
    })
  }

  delete(cidades: Cidade){
    this.servise.delete(cidades).subscribe({
       next:() => this.loadCidades
   })
  }



}
