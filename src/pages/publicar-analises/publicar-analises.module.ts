import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicarAnalisesPage } from './publicar-analises';

@NgModule({
  declarations: [
    PublicarAnalisesPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicarAnalisesPage),
  ],
})
export class PublicarAnalisesPageModule {}
