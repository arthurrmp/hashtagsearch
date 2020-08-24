import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExibidosPage } from './exibidos.page';

const routes: Routes = [
  {
    path: '',
    component: ExibidosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExibidosPageRoutingModule {}
