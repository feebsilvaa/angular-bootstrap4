import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-customizado-eventos-example',
  templateUrl: './binding-customizado-eventos-example.component.html',
  styleUrls: ['./binding-customizado-eventos-example.component.scss']
})
export class BindingCustomizadoEventosExampleComponent implements OnInit {

  funcionarios: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAdicionarFuncionario(funcionario: any) {
    this.funcionarios.push(funcionario);
  }

  limparLista(): void {
    this.funcionarios = [];
  }

}
