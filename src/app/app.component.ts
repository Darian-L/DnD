import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from '../pages/home/home';
import { ResourcePage } from '../pages/resources/resources';
import { DicePage } from '../pages/dice/dice';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tab1Root = HomePage;
  tab2Root = ResourcePage;
  tab3Root = DicePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public keyboard: Keyboard ) {
    platform.ready().then(() => {
      statusBar.styleLightContent();
      splashScreen.hide();
      platform.registerBackButtonAction(()=>{}, 101);
      this.keyboard.onKeyboardShow().subscribe(() => {
        document.body.classList.add('keyboard-is-open');
      });

      this.keyboard.onKeyboardHide().subscribe(() => {
        document.body.classList.remove('keyboard-is-open');
      });
    });
  }
}

