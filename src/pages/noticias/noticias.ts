import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ComunicacaoApiProvider } from '../../providers/comunicacao-api';
import { Noticia } from '../noticia';
import { NoticiaPage } from '../noticia/noticia';

@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})

export class NoticiasPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public comunicacaoApi: ComunicacaoApiProvider) {
  }

  noticias: Array<Noticia> = new Array<Noticia>();

  ionViewDidLoad() {
    console.log("Carregou NoticasPage");
  }

  ionViewWillEnter(){
    console.log("Vai entrar");
    
    this.comunicacaoApi.getTodasNoticias(localStorage.getItem('token'))
      .subscribe(
        result => {
          this.noticias = result;
          console.log(result);
        },
        error => {
          console.log(error);
        }
      )
  }

  public abreNoticia(id: any) {
    let noticia: any;
    this.comunicacaoApi.getNoticia(localStorage.getItem('token'), id)
      .subscribe(
        result => {
          noticia = result;
          this.navCtrl.push(NoticiaPage, { objeto: noticia });
        }
      )
  }
}
