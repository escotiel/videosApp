import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AninimoPageRoutingModule } from './aninimo-routing.module';

import { AninimoPage } from './aninimo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AninimoPageRoutingModule
  ],
  declarations: [AninimoPage]
})
export class AninimoPageModule {}
