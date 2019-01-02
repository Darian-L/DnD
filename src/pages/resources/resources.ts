import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ConditionsPage } from "../../pages/resources/conditions/conditions";
import { LevelsPage } from "../../pages/resources/levels/levels";
import { AbilityScoresPage } from "../resources/ability_scores/ability-scores";
import { ArmourPage } from "../../pages/resources/armour/armour";
import { ClassesPage } from "../../pages/resources/classes/classes";
import { EquipmentPage } from "../../pages/resources/equipment/equipment";
import { FeaturesPage } from "../../pages/resources/features/features";
import { LanguagesPage } from "../../pages/resources/languages/languages";
import { RacesPage } from "../../pages/resources/races/races";
import { SubracesPage } from "../../pages/resources/subraces/subraces";
import { SkillsPage } from "../../pages/resources/skills/skills";
import { SpellsPage } from "../../pages/resources/spells/spells";
import { WeaponsPage } from "../../pages/resources/weapons/weapons";
import { WeaponPropertiesPage } from "../../pages/resources/weapon-properties/weapon-properties";

@Component({
  selector: "page-resources",
  templateUrl: "resources.html"
})
export class ResourcePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {}

  pushConditionsPage() {
    this.navCtrl.push(ConditionsPage);
    console.log("Conditions pushed");
  }

  pushLevelsPage() {
    this.navCtrl.push(LevelsPage);
    console.log("Levels pushed");
  }

  pushAbilityScoresPage() {
    this.navCtrl.push(AbilityScoresPage);
    console.log("Ability Scores pushed");
  }

  pushArmourPage() {
    this.navCtrl.push(ArmourPage);
    console.log("Armour pushed");
  }

  pushClassesPage() {
    this.navCtrl.push(ClassesPage);
    console.log("Classes pushed");
  }

  pushEquipmentPage() {
    this.navCtrl.push(EquipmentPage);
    console.log("Equipment pushed");
  }

  pushFeaturesPage() {
    this.navCtrl.push(FeaturesPage);
    console.log("Features pushed");
  }

  pushLanguagesPage() {
    this.navCtrl.push(LanguagesPage);
    console.log("Languages pushed");
  }

  pushRacesPage() {
    this.navCtrl.push(RacesPage);
    console.log("Races pushed");
  }

  pushSkillsPage() {
    this.navCtrl.push(SkillsPage);
    console.log("Skills pushed");
  }

  pushSpellsPage() {
    this.navCtrl.push(SpellsPage);
    console.log("Spells pushed");
  }

  pushSubracesPage() {
    this.navCtrl.push(SubracesPage);
    console.log("Subraces pushed");
  }

  pushWeaponsPage() {
    this.navCtrl.push(WeaponsPage);
    console.log("Weapons pushed");
  }

  pushWeaponPropertiesPage() {
    this.navCtrl.push(WeaponPropertiesPage);
    console.log("Weapon Properties pushed");
  }
}
