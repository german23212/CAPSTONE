import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatbotPageRoutingModule } from './chatbot-routing.module';

import { ChatbotPage } from './chatbot.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatbotPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ChatbotPage]
})
export class ChatbotPageModule {}
