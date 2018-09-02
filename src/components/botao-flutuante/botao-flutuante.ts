import { Component } from '@angular/core';

/**
 * Generated class for the BotaoFlutuanteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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
