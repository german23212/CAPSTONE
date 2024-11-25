import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPoliciaPageRoutingModule } from './perfil-policia-routing.module';

import { PerfilPoliciaPage } from './perfil-policia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPoliciaPageRoutingModule
  ],
  declarations: [PerfilPoliciaPage]
})
export class PerfilPoliciaPageModule {}
