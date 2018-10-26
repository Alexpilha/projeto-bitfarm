import { Component } from '@angular/core';


@Component({
  selector: 'botao-flutuante',
  templateUrl: 'botao-flutuante.html'
})
export class BotaoFlutuanteComponent {

  text: string;

  constructor() {
    console.log('Hello BotaoFlutuanteComponent Component');
    this.text = 'Hello World';
  }

}
