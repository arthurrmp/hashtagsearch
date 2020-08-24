import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TweetDetalhesPageRoutingModule } from './tweet-detalhes-routing.module';

import { TweetDetalhesPage } from './tweet-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TweetDetalhesPageRoutingModule, 
    ReactiveFormsModule,

  ],
  declarations: [TweetDetalhesPage]
})
export class TweetDetalhesPageModule { }
