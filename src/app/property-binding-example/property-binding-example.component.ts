import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-example',
  templateUrl: './property-binding-example.component.html',
  styleUrls: ['./property-binding-example.component.scss']
})
export class PropertyBindingExampleComponent implements OnInit {

  nome: string = 'Fernando';

  constructor() { }

  ngOnInit(): void {
  }

  adicionar(nome: string) {
    console.log(nome);    
    this.nome = nome;
  }

  alterarNome(event: any) {
    console.log(event);
    this.nome = event.target.value;
  }
}
