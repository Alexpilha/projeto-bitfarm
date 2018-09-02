import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html',
})
export class NoticiaPage {

  noticiaExibir: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private appBrowser: InAppBrowser) {
    this.noticiaExibir = this.navParams.get('objeto');
  }

  ionViewDidLoad() {
  }
}
