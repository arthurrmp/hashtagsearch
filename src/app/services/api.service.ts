import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { TweetDetalhesPage } from '../pages/tweet-detalhes/tweet-detalhes.page';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url = 'http://192.168.1.3:3000';

  constructor(private httpClient: HttpClient, public modalController: ModalController, public platform: Platform) {
  }

  /**
   * Requisição get que retorna os tweets mais recentes para a escolha de serem mostrados no telão
   */
  buscarTweets(hashtag) {
    return this.httpClient.get(this.url + `/tweets/buscar/${hashtag}`);
  }

  obterExibidos() {
    return this.httpClient.get(this.url + `/tweets/exibidos`);
  }

  inserirTweet(tweet) {
    return this.httpClient.post(this.url + `/tweet`, tweet, { responseType: 'text' });
  }

  /**
   * Abre um modal com a página 'tweet-detalhes', que carregará as informações do tweet clicado para serem escolhidos
   * se serão mostrados no painel.
   * @param tweet informações para serem exibidas na página tweet-detalhes
   */
  async confirmarExibir(tweet) {
    // A foto trazida padrão pela API do twitter é a versão 48x48. 
    // Quando necessário carregar a versão original, é necessário remover o '_normal' do final do nome do arquivo.
    if (tweet.foto.endsWith(`_normal.jpg`)) {
      tweet.foto = tweet.foto.replace(`_normal.jpg`, `.jpg`);
    }
    const modal = await this.modalController.create({
      component: TweetDetalhesPage,
      componentProps: {
        'tweet': tweet
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    return data;
  }
}
