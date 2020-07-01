import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-example',
  templateUrl: './interpolation-example.component.html',
  styleUrls: ['./interpolation-example.component.scss']
})
export class InterpolationExampleComponent implements OnInit {

  nome: string = 'Fernando';
  private idade: number = 26;

  constructor() { }

  ngOnInit(): void {
  }

  getIdade() :number {
    return this.idade;
  }

}
