import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-example',
  templateUrl: './ngfor-example.component.html',
  styleUrls: ['./ngfor-example.component.scss']
})
export class NgforExampleComponent implements OnInit {

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

}
