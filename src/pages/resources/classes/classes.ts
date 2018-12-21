import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HttpService } from "../../../providers/http-service";
import { ClassesDetailsPage } from "../classes/classes-details/classes-details"

@Component({
  selector: "page-classes",
  templateUrl: "classes.html"
})
export class ClassesPage {

  public response

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService
  ) {
    this.httpService.request("classes", succeed => {
      this.response = succeed;
    });
  }

  pushClassesDetails(index){
    this.navCtrl.push(ClassesDetailsPage, { index: (index+1) });
  }
}
