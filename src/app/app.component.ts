import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  navigate: any;

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Buscador',
      url: '/tabs/buscador',
      icon: 'search'
    },
    {
      title: 'Exibidos',
      url: '/tabs/exibidos',
      icon: 'happy'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    //Ao ser notificado de alterações na rota, marca no side-menu a página atual
    this.router.events.subscribe((evento) => {
      if (evento instanceof NavigationEnd) {
        this.atualizarSideMenu(evento.url.replace('/tabs/', ''));
      }
    });
  }

  // Verifica no objeto criado acima qual o Index que deverá ser setado como selecionado no side-menu
  atualizarSideMenu(pagina?) {
    this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === pagina.toLowerCase());
  }
}
