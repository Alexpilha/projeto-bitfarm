import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnalistasPage } from './analistas';

@NgModule({
  declarations: [
    AnalistasPage,
  ],
  imports: [
    IonicPageModule.forChild(AnalistasPage),
  ],
})
export class AnalistasPageModule {}
