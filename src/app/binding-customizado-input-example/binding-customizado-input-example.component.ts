import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-customizado-input-example',
  templateUrl: './binding-customizado-input-example.component.html',
  styleUrls: ['./binding-customizado-input-example.component.scss']
})
export class BindingCustomizadoInputExampleComponent implements OnInit {

  nome: string = 'Fernando';
  funcionarios: any[] = [];
  adicionado: boolean = false;
  ultimoId: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  adicionar(nome: string) {
    this.nome = nome;
    this.funcionarios.push({ nome, id: Math.round(Math.random() * 100)});
    this.adicionado = true;
  }

  limparLista(): void {
    this.funcionarios = [];
    this.adicionado = false;
  }
}
