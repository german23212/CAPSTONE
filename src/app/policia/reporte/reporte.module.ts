import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportePageRoutingModule } from './reporte-routing.module';

import { ReportePage } from './reporte.page';
import { ReporteComponent } from 'src/app/components/reportes/reporte/reporte.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportePageRoutingModule
  ],
  declarations: [ReportePage, ReporteComponent]
})
export class ReportePageModule {}
