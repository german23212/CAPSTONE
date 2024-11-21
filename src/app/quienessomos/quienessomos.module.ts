import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuienessomosPageRoutingModule } from './quienessomos-routing.module';

import { QuienessomosPage } from './quienessomos.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuienessomosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [QuienessomosPage]
})
export class QuienessomosPageModule {}
