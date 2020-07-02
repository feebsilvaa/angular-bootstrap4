import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding-example',
  templateUrl: './two-way-data-binding-example.component.html',
  styleUrls: ['./two-way-data-binding-example.component.scss']
})
export class TwoWayDataBindingExampleComponent implements OnInit {

  nome: string = 'Fernando';
  adicionado: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  adicionar(nome: string) {
    console.log(nome);    
    this.nome = nome;
    this.adicionado = true;
  }

}
