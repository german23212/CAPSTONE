import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColaboradoresPageRoutingModule } from './colaboradores-routing.module';

import { ColaboradoresPage } from './colaboradores.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColaboradoresPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ColaboradoresPage]
})
export class ColaboradoresPageModule {}
