import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfiltradoPage } from './infiltrado.page';

const routes: Routes = [
  {
    path: '',
    component: InfiltradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfiltradoPageRoutingModule {}
