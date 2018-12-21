import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HttpService } from "../../../providers/http-service";
import { FeaturesDetailsPage } from "../features/features-details/features-details"

@Component({
  selector: "page-features",
  templateUrl: "features.html"
})
export class FeaturesPage {

  public response
  public class;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService
  ) {
    this.httpService.request("features", succeed => {
      this.response = succeed;
    });

    this.class = [
      false, false, false, false, false, false, false, false, false, false, false, false
    ]
  }

  show(number) {
    if (this.class[number] == true) {
       this.class[number] = false;
    } else {
      this.class[number] = true;
    }
    console.log("toggled", this.class[number])
  }

  pushBarbarianFeatures(index){
    this.navCtrl.push(FeaturesDetailsPage, { index: (index+1) });
  }
  pushBardFeatures(index){
    this.navCtrl.push(FeaturesDetailsPage, { index: (index+25) });
  }
  pushClericFeatures(index){
    this.navCtrl.push(FeaturesDetailsPage, { index: (index+71) });
  }
  pushDruidFeatures(index){
    this.navCtrl.push(FeaturesDetailsPage, { index: (index+100) });
  }
  pushFigtherFeatures(index){
    this.navCtrl.push(FeaturesDetailsPage, { index: (index+131) });
  }
  pushMonkFeatures(index){
    this.navCtrl.push(FeaturesDetailsPage, { index: (index+160) });
  }
  pushPaladinFeatures(index){
    this.navCtrl.push(FeaturesDetailsPage, { index: (index+191) });
  }
  pushRangerFeatures(index){
    this.navCtrl.push(FeaturesDetailsPage, { index: (index+220) });
  }
  pushRogueFeatures(index){
    this.navCtrl.push(FeaturesDetailsPage, { index: (index+260) });
  }
  pushSorcerorFeatures(index){
    this.navCtrl.push(FeaturesDetailsPage, { index: (index+303) });
  }
  pushWarlockFeatures(index){
    this.navCtrl.push(FeaturesDetailsPage, { index: (index+340) });
  }
  pushWizardFeatures(index){
    this.navCtrl.push(FeaturesDetailsPage, { index: (index+400) });
  }
}
