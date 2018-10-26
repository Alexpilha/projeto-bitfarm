import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalaDeTradePage } from './sala-de-trade';

@NgModule({
  declarations: [
    SalaDeTradePage,
  ],
  imports: [
    IonicPageModule.forChild(SalaDeTradePage),
  ],
})
export class SalaDeTradePageModule {}
