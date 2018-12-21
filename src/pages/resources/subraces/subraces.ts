import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HttpService } from "../../../providers/http-service";
import { SubracesDetailsPage } from "../subraces/subraces-details/subraces-details"

@Component({
  selector: "subpage-races",
  templateUrl: "subraces.html"
})
export class SubracesPage {

  public response

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService
  ) {
    this.httpService.request("subraces", succeed => {
      this.response = succeed;
    });
  }

  pushSubracesDetails(index){
    this.navCtrl.push(SubracesDetailsPage, { index: (index+1) });
  }
}
