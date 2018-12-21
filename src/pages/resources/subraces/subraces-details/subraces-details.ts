import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HttpService } from "../../../../providers/http-service";

@Component({
  selector: "page-subraces-details",
  templateUrl: "subraces-details.html"
})
export class SubracesDetailsPage {
  public response;
  private index;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService
  ) {
    this.index = this.navParams.get("index");
    console.log(this.index);

    this.httpService.request("subraces/" + this.index, succeed => {
      this.response = succeed;
    });
  }
}
