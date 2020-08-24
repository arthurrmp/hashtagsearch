import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExibidosPage } from './exibidos.page';
import { ExibidosPageRoutingModule } from './exibidos-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExibidosPageRoutingModule
  ],
  declarations: [ExibidosPage]
})
export class ExibidosPageModule {}
