import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.scss']
})
export class FuncionarioCardComponent implements OnInit {

  @Input('func-prop') funcionario: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
