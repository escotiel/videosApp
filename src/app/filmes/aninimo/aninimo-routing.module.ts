import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AninimoPage } from './aninimo.page';

const routes: Routes = [
  {
    path: '',
    component: AninimoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AninimoPageRoutingModule {}
