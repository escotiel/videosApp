import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfiltradoPageRoutingModule } from './infiltrado-routing.module';

import { InfiltradoPage } from './infiltrado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfiltradoPageRoutingModule
  ],
  declarations: [InfiltradoPage]
})
export class InfiltradoPageModule {}
