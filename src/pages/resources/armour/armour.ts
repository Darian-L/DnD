import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HttpService } from "../../../providers/http-service";
import { ArmourDetailsPage } from "./armour-details/armour-details";

@Component({
  selector: "page-armour",
  templateUrl: "armour.html"
})
export class ArmourPage {

  public response

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService
  ) {
    this.httpService.request("equipment", succeed => {
      this.response = succeed;
    });
  }

  pushArmourDetails(index){
    this.navCtrl.push(ArmourDetailsPage, { index: (index+38) });
  }
}
