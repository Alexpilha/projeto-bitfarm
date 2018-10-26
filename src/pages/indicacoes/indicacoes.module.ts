import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndicacoesPage } from './indicacoes';

@NgModule({
  declarations: [
    IndicacoesPage,
  ],
  imports: [
    IonicPageModule.forChild(IndicacoesPage),
  ],
})
export class IndicacoesPageModule {}
