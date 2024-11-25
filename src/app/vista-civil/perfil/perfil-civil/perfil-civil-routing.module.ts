import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilCivilPage } from './perfil-civil.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilCivilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilCivilPageRoutingModule {}
