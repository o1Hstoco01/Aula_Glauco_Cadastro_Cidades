import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from '../cidade.service';

@Component({
  selector: 'app-cidade-form',
  templateUrl: './cidade-form.component.html',
  styleUrl: './cidade-form.component.css'
})
export class CidadeFormComponent implements OnInit{
  constructor(private router: Router, private activeRoute: ActivatedRoute, private service: CidadeService){

  }

  ngOnInit() {
    const id = Number(this.activeRoute.snapshot.paramMap.get("id"));
    this.loadCidades(id);
  }
  loadCidades(id: number){
    this.service.getCidadeById(id).subscribe({
    next: data=> alert(data.nome)
  })
  }

}

