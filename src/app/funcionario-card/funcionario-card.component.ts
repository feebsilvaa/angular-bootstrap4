import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.scss']
})
export class FuncionarioCardComponent implements OnInit {

  @Input() funcionario: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  isAdmin() {
    return this.funcionario.id % 2 == 0;
  }

  getEstilosCartao() {
    return {
      marginBottom: '8px',
      'border-width.px': 5,
      backgroundColor: this.funcionario.id % 2 == 0 ? 'lightgreen' : 'lightblue'
    }
  }

}
