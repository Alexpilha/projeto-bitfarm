import { Component, ViewChild } from '@angular/core';
import { NavController,MenuController, ToastController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CadastrarPage } from '../cadastrar/cadastrar';
import { ComunicacaoApiProvider } from '../../providers/comunicacao-api';
import { InAppBrowser } from '@ionic-native/in-app-browser';




export class Usuario {
  token: string;
  authentication: boolean;
}
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  @ViewChild('email') login
  @ViewChild('senha') password

  public tokenUsuario: string

  constructor(public navCtrl: NavController, 
              private toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public comunicacaoApiProvider: ComunicacaoApiProvider,
              public menu: MenuController,
              private appBrowser: InAppBrowser) {}
  
  public entrarCadastrar(): void {
    const browser = this.appBrowser.create("https://bitfarm.trade/registrar/");
    browser.show();
  }
  public entrarQuemSomos(): void {
    const browser = this.appBrowser.create("https://bitfarm.trade/comunidade/");
    browser.show();
  }
  public entrar(): void {
    let toast = this.toastCtrl.create(
      {
        duration: 3000,
        position: 'bottom'
      }
    )
    let usuario: Usuario = new Usuario();
    let loading = this.loadingCtrl.create()
    loading.present();

    //exemplo. tem que pegar dos campos da tela de login
    let nomeUsuario: string = 'testea';
    let senhaUsuario: string = '123456';
    
    this.comunicacaoApiProvider.login(nomeUsuario, senhaUsuario)
      .subscribe(
        result => {
          loading.dismiss();
          usuario = result;
          localStorage.setItem('token', usuario.token);
          if (localStorage.getItem('token') != '') {
            toast.setMessage('Acessando a página principal')
            toast.present()
            this.navCtrl.setRoot(HomePage);
          }
        },
        error => {
          console.log(error);
        }
    )
  }

  goToHome(params){
    console.log('params do login');
    console.log(params);
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToCadastrar(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }

  ionViewDidEnter(){
    this.menu.enable(false);

  }

  ionViewWillLeave(){
    this.menu.enable(true);

  }
}
