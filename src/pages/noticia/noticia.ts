import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html',
})
export class NoticiaPage {

  noticiaExibir: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.noticiaExibir = this.navParams.get('objeto');
  }

  ionViewDidLoad() {
  }
}
