import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ConditionsPage } from "../conditions/conditions";
import { LevelsPage } from "../levels/levels";

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
}
