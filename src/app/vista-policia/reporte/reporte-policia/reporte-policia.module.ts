import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportePoliciaPageRoutingModule } from './reporte-policia-routing.module';

import { ReportePoliciaPage } from './reporte-policia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportePoliciaPageRoutingModule
  ],
  declarations: [ReportePoliciaPage]
})
export class ReportePoliciaPageModule {}
