import { Component, OnInit } from '@angular/core';
import { Cidade } from '../cidade';


@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrl: './cidade.component.css'
})
export class CidadeComponent implements OnInit{
  cidades: Cidade  [] = [
    {
    "CEP":15000,
    "Nome":"Cidade",
    "Estado": "SP",
    "Ddd":185030.00,
    "Populacao": 30000
    },
   ];

  ngOnInit(): void {
   
  }

}
