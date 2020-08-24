import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'buscador',
        loadChildren: () => import('../buscador/buscador.module').then(m => m.BuscadorPageModule)
      },
      {
        path: 'exibidos',
        loadChildren: () => import('../exibidos/exibidos.module').then(m => m.ExibidosPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/buscador',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/buscador',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
