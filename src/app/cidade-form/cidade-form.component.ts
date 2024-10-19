import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from '../cidade.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cidade-form',
  templateUrl: './cidade-form.component.html',
  styleUrl: './cidade-form.component.css'
})
export class CidadeFormComponent implements OnInit{
  formGroupCidade: FormGroup;
  isEditing: boolean = false;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private service: CidadeService, private FormBuilder: FormBuilder){
    this.formGroupCidade = FormBuilder.group({
      id: [''],
      cep: [''],
      nome: [''],
      estado: [''],
      ddd: [''],
      populacao: [''],
    });
  }

  ngOnInit() {
    const id = Number(this.activeRoute.snapshot.paramMap.get("id"));
    if(id != 0){
      this.isEditing=true;
      this.loadCidades(id);
    }
  }

  loadCidades(id: number){
    this.service.getCidadeById(id).subscribe({
    next: data=> this.formGroupCidade.setValue(data)
  });
  }

  update(){
    this.service.update(this.formGroupCidade.value).subscribe({
      next:() => this.router.navigate(['cidade'])
    })
  }

  save(){
    this.service.save(this.formGroupCidade.value).subscribe({
      next:()=> this.router.navigate(['cidade'])
    })
  }

}

