import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZonaDeCombatePage } from './zona-de-combate.page';

const routes: Routes = [
  {
    path: '',
    component: ZonaDeCombatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZonaDeCombatePageRoutingModule {}
