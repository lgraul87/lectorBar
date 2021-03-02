import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

import { DatosComponentesService } from './services/datos-componentes.service';
import { Componente } from './interfaces/interfaces';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  componentes: Componente[] = [];
  constructor(
    private platform: Platform,
     private splashScreen: SplashScreen,
     private statusBar: StatusBar,
    private _datos: DatosComponentesService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.componentes = await this._datos.getDatos();
    });
  }
}
