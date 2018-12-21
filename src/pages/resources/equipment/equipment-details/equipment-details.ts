import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HttpService } from "../../../../providers/http-service";

@Component({
  selector: "page-equipment-details",
  templateUrl: "equipment-details.html"
})
export class EquipmentDetailsPage {
  public response;
  private index;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService
  ) {
    this.index = this.navParams.get("index");
    console.log(this.index);

    this.httpService.request("equipment/" + this.index, succeed => {
      this.response = succeed;
    });
  }
}
