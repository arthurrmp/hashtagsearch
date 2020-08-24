import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tweet-detalhes',
  templateUrl: './tweet-detalhes.page.html',
  styleUrls: ['./tweet-detalhes.page.scss'],
})
export class TweetDetalhesPage {

  @Input() tweet;

  constructor(private modalCtrl: ModalController, private api: ApiService, private toastController: ToastController) { }

  abrirLinkTweet() {
    window.open(`https://www.twitter.com/i/web/status/${this.tweet.id}`, '_blank');
  }

  dispensarModal() {
    this.modalCtrl.dismiss({ 'inserido': false });
  }

  inserirTweet() {
    this.api.inserirTweet(this.tweet).subscribe(async (data) => {
      if (data === "OK") {
        this.modalCtrl.dismiss({
          'inserido': true
        });
        const toast = await this.toastController.create({
          message: 'Twitter sendo mostrado no painel',
          color: 'success',
          duration: 2000
        });
        toast.present();
      }
    })
  }





}
