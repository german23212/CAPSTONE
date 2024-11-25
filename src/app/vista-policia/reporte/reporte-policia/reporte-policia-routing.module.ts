import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportePoliciaPage } from './reporte-policia.page';

const routes: Routes = [
  {
    path: '',
    component: ReportePoliciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportePoliciaPageRoutingModule {}
