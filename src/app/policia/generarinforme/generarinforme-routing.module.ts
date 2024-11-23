import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarinformePage } from './generarinforme.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarinformePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarinformePageRoutingModule {}
