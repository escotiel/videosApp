import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'aninimo',
    loadChildren: () => import('./filmes/aninimo/aninimo.module').then( m => m.AninimoPageModule)
  },
  {
    path: 'infiltrado',
    loadChildren: () => import('./filmes/infiltrado/infiltrado.module').then( m => m.InfiltradoPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  },
  {
    path: 'army-of-dead',
    loadChildren: () => import('./filmes/army-of-dead/army-of-dead.module').then( m => m.ArmyOfDeadPageModule)
  },
  {
    path: 'velozes-furiosos9',
    loadChildren: () => import('./filmes/velozes-furiosos9/velozes-furiosos9.module').then( m => m.VelozesFuriosos9PageModule)
  },
  {
    path: 'cruella',
    loadChildren: () => import('./filmes/cruella/cruella.module').then( m => m.CruellaPageModule)
  },
  {
    path: 'zona-de-combate',
    loadChildren: () => import('./filmes/zona-de-combate/zona-de-combate.module').then( m => m.ZonaDeCombatePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
