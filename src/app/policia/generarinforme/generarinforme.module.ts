import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarinformePageRoutingModule } from './generarinforme-routing.module';

import { GenerarinformePage } from './generarinforme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarinformePageRoutingModule
  ],
  declarations: [GenerarinformePage]
})
export class GenerarinformePageModule {}
