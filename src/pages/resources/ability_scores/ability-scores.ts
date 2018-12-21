import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HttpService } from "../../../providers/http-service";
import { AbilityScoresDetailsPage } from "./ability-scores-details/ability-scores-details";

@Component({
  selector: "page-ability-scores",
  templateUrl: "ability-scores.html"
})
export class AbilityScoresPage {

  public response

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService
  ) {
    this.httpService.request("ability-scores", succeed => {
      this.response = succeed;
    });
  }

  pushAbilityScoresDetails(index){
    this.navCtrl.push(AbilityScoresDetailsPage, { index: (index+1) });
  }

}
