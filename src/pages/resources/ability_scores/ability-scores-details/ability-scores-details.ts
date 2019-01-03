import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HttpService } from "../../../../providers/http-service";

@Component({
  selector: "page-ability-scores-details",
  templateUrl: "ability-scores-details.html"
})
export class AbilityScoresDetailsPage {
  public response;
  private index;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService
  ) {
    this.index = this.navParams.get("index");
    console.log(this.index);

    this.httpService.request("ability-scores/" + this.index, succeed => {
      this.response = succeed;
    });
  }
}