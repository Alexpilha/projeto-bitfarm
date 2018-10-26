import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComunidadePage } from './comunidade';

@NgModule({
  declarations: [
    ComunidadePage,
  ],
  imports: [
    IonicPageModule.forChild(ComunidadePage),
  ],
})
export class ComunidadePageModule {}
