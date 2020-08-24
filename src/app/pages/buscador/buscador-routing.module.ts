import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorPage } from './buscador.page';

const routes: Routes = [
  {
    path: '',
    component: BuscadorPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscadorPageRoutingModule {}
