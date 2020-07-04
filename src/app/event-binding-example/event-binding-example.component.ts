import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-example',
  templateUrl: './event-binding-example.component.html',
  styleUrls: ['./event-binding-example.component.scss']
})
export class EventBindingExampleComponent implements OnInit {

  nome = 'Fernando';

  constructor() { }

  ngOnInit(): void {
  }

  adicionar(nome: string) {
    console.log(`Adicionando ${nome}`);
    this.nome = nome;
  }

  alterarNome(event: any) {
    console.log(event);
    this.nome = event.target.value;
  }

}
