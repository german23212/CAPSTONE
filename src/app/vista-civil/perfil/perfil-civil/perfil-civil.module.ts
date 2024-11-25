import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilCivilPageRoutingModule } from './perfil-civil-routing.module';

import { PerfilCivilPage } from './perfil-civil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilCivilPageRoutingModule
  ],
  declarations: [PerfilCivilPage]
})
export class PerfilCivilPageModule {}
