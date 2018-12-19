import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ConditionsPage } from "../conditions/conditions";
import { LevelsPage } from "../levels/levels";
import { HttpService } from "../../providers/http-service";


@Component({
  selector: "page-resources",
  templateUrl: "resources.html"
})
export class ResourcePage {

public results

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService

  ) {
    this.httpService.request("classes", succeed => {
      this.results = succeed;
    });
    console.log(this.results);
    console.log("load");
  }

  pushConditionsPage() {
    this.navCtrl.push(ConditionsPage);
    console.log("Conditions pushed");
  }

  pushLevelsPage() {
    this.navCtrl.push(LevelsPage);
    console.log("Levels pushed");
  }
}
