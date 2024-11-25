import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCivilPage } from './home-civil.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCivilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCivilPageRoutingModule {}
