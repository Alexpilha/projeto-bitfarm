import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ComunicacaoApiProvider } from '../../providers/comunicacao-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public navparams: NavParams,
              public comunicacaoApi: ComunicacaoApiProvider) {
     
  }
}
