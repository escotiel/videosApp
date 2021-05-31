import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZonaDeCombatePageRoutingModule } from './zona-de-combate-routing.module';

import { ZonaDeCombatePage } from './zona-de-combate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZonaDeCombatePageRoutingModule
  ],
  declarations: [ZonaDeCombatePage]
})
export class ZonaDeCombatePageModule {}
