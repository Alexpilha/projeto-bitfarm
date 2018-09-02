import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ComunicacaoApiProvider } from '../../providers/comunicacao-api';
import { Video } from '../video';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public navparams: NavParams,
              public comunicacaoApi: ComunicacaoApiProvider) {
     
  }
  Home: Array<Video> = new Array<Video>();
  ionViewDidLoad() {
    console.log("carregou Homepage");
  }
  ionViewWillEnter() {
    console.log("vai entraaaaar");
    console.log(localStorage.getItem('token'));
    this.comunicacaoApi.getTodosVideos(localStorage.getItem('token'))
    .subscribe(
      result => {
        this.Home = result;
        console.log(result);
      },
      error =>{
        console.log(error);
      }
    )
  }
}
