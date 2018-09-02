import { Component, Input } from '@angular/core';


@Component({
  selector: 'menu-topo',
  templateUrl: 'menu-topo.html'
})
export class MenuTopoComponent {

  @Input() nomePagina: String

  constructor() {
    console.log();
    console.log(this.nomePagina);
  }

}
