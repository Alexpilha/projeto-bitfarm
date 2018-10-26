import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NoticiasPage } from '../pages/noticias/noticias';
import { AnalisesPage } from '../pages/analises/analises';
import { AnalistasPage } from '../pages/analistas/analistas';
import { ProgramacaoPage } from '../pages/programacao/programacao';
import { ForumPage } from '../pages/forum/forum';
import { RankingPage } from '../pages/ranking/ranking';
import { ComunidadePage } from '../pages/comunidade/comunidade';
import { IndicacoesPage } from '../pages/indicacoes/indicacoes';
import { PontuacaoPage } from '../pages/pontuacao/pontuacao';
import { SalaDeTradePage } from '../pages/sala-de-trade/sala-de-trade';
import { PublicarAnalisesPage } from '../pages/publicar-analises/publicar-analises';
import { FundosPage } from '../pages/fundos/fundos';
import { MinhaContaPage } from '../pages/minha-conta/minha-conta';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }

  goToNews(params) {
    if (!params) params = {};
    console.log("entrou em Noticias");
    this.navCtrl.push(NoticiasPage);
  }

  goToAnalises(params) {
    if (!params) params = {};
    console.log("entrou em analises");
    this.navCtrl.push(AnalisesPage);
  }
  goToLoginpage(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }

  goToAnalistas(params) {
    if (!params) params = {};
    console.log("entrou analistas");
    this.navCtrl.push(AnalistasPage);
  }

  goToProgamacao(params) {
    if (!params) params = {};
    console.log("entrou analistas");
    this.navCtrl.push(ProgramacaoPage);
  }

  goToForum(params) {
    if (!params) params = {};
    console.log("entrou analistas");
    this.navCtrl.push(ForumPage);
  }

  goToRanking(params) {
    if (!params) params = {};
    console.log("entrou analistas");
    this.navCtrl.push(RankingPage);
  }

  goToComunidade(params) {
    if (!params) params = {};
    console.log("entrou analistas");
    this.navCtrl.push(ComunidadePage);
  }

  goToIndicacoes(params) {
    if (!params) params = {};
    console.log("entrou analistas");
    this.navCtrl.push(IndicacoesPage);
  }

  goToPontuacao(params) {
    if (!params) params = {};
    console.log("entrou analistas");
    this.navCtrl.push(PontuacaoPage);
  }

  goToSala(params) {
    if (!params) params = {};
    console.log("entrou analistas");
    this.navCtrl.push(SalaDeTradePage);
  }

  goToPublicar(params) {
    if (!params) params = {};
    console.log("entrou analistas");
    this.navCtrl.push(PublicarAnalisesPage);
  }

  goToFundos(params) {
    if (!params) params = {};
    console.log("entrou analistas");
    this.navCtrl.push(FundosPage);
  }

  goToConta(params) {
    if (!params) params = {};
    console.log("entrou analistas");
    this.navCtrl.push(MinhaContaPage);
  }

}