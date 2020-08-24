import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public mostrarNavbar;

  constructor(public platform: Platform) {

    this.verificarLargura();

    this.platform.resize.subscribe((data) => {
      this.verificarLargura();
    })

  }

  verificarLargura() {

    if (this.platform.width() >= 992) {
      this.mostrarNavbar = false;
    } else {
      this.mostrarNavbar = true;
    }

  }
}
