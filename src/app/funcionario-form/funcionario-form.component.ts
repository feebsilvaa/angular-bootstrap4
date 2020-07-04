import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.scss']
})
export class FuncionarioFormComponent implements OnInit {

  nome: string = 'Fernando';
  ultimoId: number = 0;
  adicionado: boolean = false;
  @Output() funcionarioAdicionado: any = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  adicionar(nome: string) {
    this.nome = nome;
    const funcionario = { 
      nome, 
      id: ++this.ultimoId
    };
    this.funcionarioAdicionado.emit(funcionario);
    this.adicionado = true;
  }
}
