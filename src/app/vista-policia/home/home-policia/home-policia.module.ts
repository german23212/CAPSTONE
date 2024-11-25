import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePoliciaPageRoutingModule } from './home-policia-routing.module';

import { HomePoliciaPage } from './home-policia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePoliciaPageRoutingModule
  ],
  declarations: [HomePoliciaPage]
})
export class HomePoliciaPageModule {}
