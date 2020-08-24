import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TweetDetalhesPage } from './tweet-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: TweetDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TweetDetalhesPageRoutingModule {}
