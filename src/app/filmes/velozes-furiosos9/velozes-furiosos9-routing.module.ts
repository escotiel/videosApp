import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VelozesFuriosos9Page } from './velozes-furiosos9.page';

const routes: Routes = [
  {
    path: '',
    component: VelozesFuriosos9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VelozesFuriosos9PageRoutingModule {}
