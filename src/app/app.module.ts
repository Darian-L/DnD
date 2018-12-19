import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
// import { LoadingController } from '../../node_modules/ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DisplayPage } from '../pages/display/display';
import { EditPage } from '../pages/edit/edit';
import { ConditionsPage} from '../pages/conditions/conditions';
import { LevelsPage } from '../pages/levels/levels';
import { CreatePage } from '../pages/create/create';
import { ResourcePage } from '../pages/resources/resources';
import { DicePage } from '../pages/dice/dice';

import { Repository } from '../providers/repository';
import { Guid } from '../providers/guid';
import { FormsModule } from '@angular/forms';
import { Autosize } from '../providers/autosize';
import { HttpService } from '../providers/http-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DisplayPage,
    EditPage,
    ConditionsPage,
    LevelsPage,
    CreatePage,
    ResourcePage,
    DicePage,
    Autosize,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    // LoadingController,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssist: false
  }),
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DisplayPage,
    EditPage,
    ConditionsPage,
    LevelsPage,
    CreatePage,
    ResourcePage,
    DicePage,
  ],
  providers: [
    Repository,
    StatusBar,
    Keyboard,
    SplashScreen,
    Guid,
    HttpService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
