import { Component } from '@angular/core';
import { LocalStorageService } from './services/localStorage/local-storage.service';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appReady:boolean = false;

  constructor(private storage:LocalStorageService, private platform: Platform) {
    this.platform.ready().then(()=>{
      this.storage.createStorage();
      this.appReady = true;
    });

    
  }
}
