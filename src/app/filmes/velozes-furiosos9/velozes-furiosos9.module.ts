import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VelozesFuriosos9PageRoutingModule } from './velozes-furiosos9-routing.module';

import { VelozesFuriosos9Page } from './velozes-furiosos9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VelozesFuriosos9PageRoutingModule
  ],
  declarations: [VelozesFuriosos9Page]
})
export class VelozesFuriosos9PageModule {}
