import { NgModule } from '@angular/core';
import { BotaoFlutuanteComponent } from './botao-flutuante/botao-flutuante';
import { MenuTopoComponent } from './menu-topo/menu-topo';

@NgModule({
	declarations: [BotaoFlutuanteComponent,
    MenuTopoComponent],
	imports: [],
	exports: [BotaoFlutuanteComponent,
    MenuTopoComponent]
})
export class ComponentsModule {}
