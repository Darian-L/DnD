import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DisplayPage } from '../pages/display/display';
import { EditPage } from '../pages/edit/edit';
import { ConditionsPage} from '../pages/conditions/conditions';
import { LevelsPage } from '../pages/levels/levels';
import { CreatePage } from '../pages/create/create'

import { HttpModule } from '@angular/http';
import { Repository } from '../providers/repository';
import { RollProvider } from '../providers/rollprovider';
import { Guid } from '../providers/guid';
import { FormsModule } from '@angular/forms';
import { Autosize } from '../providers/autosize';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DisplayPage,
    EditPage,
    ConditionsPage,
    LevelsPage,
    CreatePage,
    Autosize,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DisplayPage,
    EditPage,
    ConditionsPage,
    LevelsPage,
    CreatePage
  ],
  providers: [
    Repository,
    RollProvider,
    StatusBar,
    SplashScreen,
    Guid,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
