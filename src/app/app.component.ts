import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DisplayPage } from '../pages/display/display';
import { EditPage } from '../pages/edit/edit';
import { ConditionsPage} from '../pages/conditions/conditions';
import { LevelsPage } from '../pages/levels/levels';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any =  LevelsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

