import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variables-example',
  templateUrl: './template-reference-variables-example.component.html',
  styleUrls: ['./template-reference-variables-example.component.scss']
})
export class TemplateReferenceVariablesExampleComponent implements OnInit {

  nome: string = 'Fernando';

  constructor() { }

  ngOnInit(): void {
  }

  adicionar(nome: string) {
    console.log(nome);    
    this.nome = nome;
  }

}
