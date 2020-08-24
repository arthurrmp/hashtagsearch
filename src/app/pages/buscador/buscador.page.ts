import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { TweetDetalhesPage } from '../tweet-detalhes/tweet-detalhes.page';
import { Platform } from '@ionic/angular';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-buscador',
  templateUrl: 'buscador.page.html',
  styleUrls: ['buscador.page.scss']
})
export class BuscadorPage implements OnInit {

  public tweets;
  public hashtag: string;

  constructor(public platform: Platform, public api: ApiService) {
    this.buscarTweets();
  }

  ngOnInit() {
  }

  /** Faz a requisição de busca dos tweets e atribui na variável para uso na diretiva ngFor
   * @param event apenas para notificar finalização caso esteja usando pull-to-refresh
   */
  buscarTweets(event?) {
    if (this.hashtag) {
      //Substitui # por %23 para ser codificado sem problemas no URL
      this.api.buscarTweets(this.hashtag.replace("#", '%23')).subscribe((data) => {
        console.log(data);
        this.tweets = data;
        if (event) {
          event.target.complete();
        }
      });
    }
  }


}
