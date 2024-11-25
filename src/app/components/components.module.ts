import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { GoogleMapsComponent } from './google-maps/google-maps.component';



@NgModule({
  declarations: [HeaderComponent, GoogleMapsComponent],
  imports: [
    CommonModule, IonicModule, RouterModule
  ],
  exports: [HeaderComponent, GoogleMapsComponent]
})
export class ComponentsModule { }
