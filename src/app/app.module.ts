import { ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { CadastrarPage } from '../pages/cadastrar/cadastrar';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NgModule } from '@angular/core';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComunicacaoApiProvider } from '../providers/comunicacao-api'
import { BotaoFlutuanteComponent } from '../components/botao-flutuante/botao-flutuante';
import { MenuTopoComponent } from '../components/menu-topo/menu-topo';
import { MensagensProvider } from '../providers/mensagens';
import { NoticiasPage } from '../pages/noticias/noticias';
import { AnalisesPage } from '../pages/analises/analises';
import { NoticiaPage } from '../pages/noticia/noticia';
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


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    CadastrarPage,
    HomePage,
    BotaoFlutuanteComponent,
    MenuTopoComponent,
    NoticiasPage,
    AnalisesPage,
    NoticiaPage,
    AnalistasPage,
    ProgramacaoPage,
    ForumPage,
    RankingPage,
    ComunidadePage,
    IndicacoesPage,
    PontuacaoPage,
    SalaDeTradePage,
    PublicarAnalisesPage,
    FundosPage,
    MinhaContaPage,
   
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    CadastrarPage,
    HomePage,
    BotaoFlutuanteComponent,
    MenuTopoComponent,
    NoticiasPage,
    AnalisesPage,
    NoticiaPage,
    AnalistasPage,
    ProgramacaoPage,
    ForumPage,
    RankingPage,
    ComunidadePage,
    IndicacoesPage,
    PontuacaoPage,
    SalaDeTradePage,
    PublicarAnalisesPage,
    FundosPage,
    MinhaContaPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ComunicacaoApiProvider,
    MensagensProvider,
    InAppBrowser
  ]
})
export class AppModule {}