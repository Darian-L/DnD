import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HttpService } from "../../../providers/http-service";
import { EquipmentDetailsPage } from "../equipment/equipment-details/equipment-details"

@Component({
  selector: "page-equipment",
  templateUrl: "equipment.html"
})
export class EquipmentPage {

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

  pushEquipmentDetails(index){
    this.navCtrl.push(EquipmentDetailsPage, { index: (index+51) });
  }
}
