import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPoliciaPage } from './perfil-policia.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPoliciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPoliciaPageRoutingModule {}
