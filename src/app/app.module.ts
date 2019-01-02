import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DisplayPage } from '../pages/display/display';
import { EditPage } from '../pages/edit/edit';
import { ConditionsPage } from '../pages/resources/conditions/conditions';
import { LevelsPage } from '../pages/resources/levels/levels';
import { AbilityScoresPage } from '../pages/resources/ability_scores/ability-scores'
import { AbilityScoresDetailsPage } from '../pages/resources/ability_scores/ability-scores-details/ability-scores-details'
import { ArmourPage } from '../pages/resources/armour/armour';
import { ArmourDetailsPage } from '../pages/resources/armour/armour-details/armour-details'
import { ClassesPage } from '../pages/resources/classes/classes';
import { ClassesDetailsPage } from '../pages/resources/classes/classes-details/classes-details';
import { EquipmentPage } from '../pages/resources/equipment/equipment';
import { EquipmentDetailsPage } from '../pages/resources/equipment/equipment-details/equipment-details'
import { FeaturesPage } from '../pages/resources/features/features';
import { FeaturesDetailsPage } from '../pages/resources/features/features-details/features-details'
import { LanguagesPage } from '../pages/resources/languages/languages';
import { RacesPage } from '../pages/resources/races/races';
import { RacesDetailsPage } from '../pages/resources/races/races-details/races-details'
import { SkillsPage } from '../pages/resources/skills/skills';
import { SpellsPage } from '../pages/resources/spells/spells';
import { SpellsDetailsPage } from '../pages/resources/spells/spells-details/spells-details'
import { SubracesPage } from '../pages/resources/subraces/subraces';
import { SubracesDetailsPage } from '../pages/resources/subraces/subraces-details/subraces-details'
import { WeaponsPage } from '../pages/resources/weapons/weapons';
import { WeaponsDetailsPage } from '../pages/resources/weapons/weapons-details/weapons-details';
import { WeaponPropertiesPage } from '../pages/resources/weapon-properties/weapon-properties';
import { WeaponPropertiesDetailsPage } from '../pages/resources/weapon-properties/weapon-properties-details/weapon-properties-details';
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
    AbilityScoresPage,
    AbilityScoresDetailsPage,
    ArmourPage,
    ArmourDetailsPage,
    ClassesPage,
    ClassesDetailsPage,
    EquipmentPage,
    EquipmentDetailsPage,
    FeaturesPage,
    FeaturesDetailsPage,
    LanguagesPage,
    RacesPage,
    RacesDetailsPage,
    SkillsPage,
    SpellsPage,
    SpellsDetailsPage,
    SubracesPage,
    SubracesDetailsPage,
    WeaponsPage,
    WeaponsDetailsPage,
    WeaponPropertiesPage,
    WeaponPropertiesDetailsPage,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
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
    AbilityScoresPage,
    AbilityScoresDetailsPage,
    ArmourPage,
    ArmourDetailsPage,
    ClassesPage,
    ClassesDetailsPage,
    EquipmentPage,
    EquipmentDetailsPage,
    FeaturesPage,
    FeaturesDetailsPage,
    LanguagesPage,
    RacesPage,
    RacesDetailsPage,
    SkillsPage,
    SpellsPage,
    SpellsDetailsPage,
    SubracesPage,
    SubracesDetailsPage,
    WeaponsPage,
    WeaponsDetailsPage,
    WeaponPropertiesPage,
    WeaponPropertiesDetailsPage,
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
