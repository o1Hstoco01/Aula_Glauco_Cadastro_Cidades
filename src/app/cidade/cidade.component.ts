import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../cidade.service';
import { Cidade } from '../cidade';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrl: './cidade.component.css'
})

export class CidadeComponent implements OnInit{
  cidades: Cidade  [] = [];

  constructor(private service: CidadeService, private router: Router){}

  ngOnInit(): void {
   this.loadCidades();
  }

  loadCidades(){
    this.service.getCidades().subscribe({
      next: data => this.cidades = data
    })
  }

  delete(cidades: Cidade){
    this.service.delete(cidades).subscribe({
       next:() => this.loadCidades()
   })
  }

  create(){
    this.router.navigate(['cidades'])
  }


}
