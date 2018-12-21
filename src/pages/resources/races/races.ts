import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HttpService } from "../../../providers/http-service";
import { RacesDetailsPage } from "../races/races-details/races-details"

@Component({
  selector: "page-races",
  templateUrl: "races.html"
})
export class RacesPage {

  public response

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService
  ) {
    this.httpService.request("races", succeed => {
      this.response = succeed;
    });
  }

  pushRacesDetails(index){
    this.navCtrl.push(RacesDetailsPage, { index: (index+1) });
  }
}
