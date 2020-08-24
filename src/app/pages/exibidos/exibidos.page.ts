import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-exibidos',
  templateUrl: 'exibidos.page.html',
  styleUrls: ['exibidos.page.scss']
})
export class ExibidosPage {

  public tweets;

  constructor(private api: ApiService, public platform: Platform) {
    this.obterExibidos();
  }

  obterExibidos(event?) {
    this.api.obterExibidos().subscribe(data => {
      this.tweets = data;
      console.log(data);

      if (event) {
        event.target.complete();
      }
    })
  }

  async confirmarExibir(tweet) {
    let inserido = (await this.api.confirmarExibir(tweet)).inserido;
    if (inserido) {
      this.obterExibidos();
    }


  }

}
