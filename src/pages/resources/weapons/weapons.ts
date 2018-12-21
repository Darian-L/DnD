import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HttpService } from "../../../providers/http-service";
import { WeaponsDetailsPage } from "../weapons/weapons-details/weapons-details"



@Component({
  selector: "page-weapons",
  templateUrl: "weapons.html"
})
export class WeaponsPage {

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

  pushWeaponsDetails(index){
    this.navCtrl.push(WeaponsDetailsPage, { index: (index+1) });
  }
}
