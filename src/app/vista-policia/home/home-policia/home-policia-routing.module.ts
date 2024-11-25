import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePoliciaPage } from './home-policia.page';

const routes: Routes = [
  {
    path: '',
    component: HomePoliciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePoliciaPageRoutingModule {}
