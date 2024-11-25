import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeCivilPageRoutingModule } from './home-civil-routing.module';

import { HomeCivilPage } from './home-civil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeCivilPageRoutingModule
  ],
  declarations: [HomeCivilPage]
})
export class HomeCivilPageModule {}
