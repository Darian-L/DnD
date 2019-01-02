import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HttpService } from "../../../providers/http-service";
import { SpellsDetailsPage } from "../spells/spells-details/spells-details"

@Component({
  selector: "page-spells",
  templateUrl: "spells.html"
})
export class SpellsPage {

  public response
  public class;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService
  ) {
    this.httpService.request("spells", succeed => {
      this.response = succeed;
    });

    this.class = [
      false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false
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

  pushASpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+1) });
  }
  pushBSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+22) });
  }
  pushCSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+36) });
  }
  pushDSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+71) });
  }
  pushESpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+95) });
  }
  pushFSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+104) });
  }
  pushGSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+132) });
  }
  pushHSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+149) });
  }
  pushISpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+165) });
  }
  pushJSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+175) });
  }
  pushKSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+176) });
  }
  pushLSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+177) });
  }
  pushMSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+186) });
  }
  pushNSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+213) });
  }
  pushPSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+214) });
  }
  pushRSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+238) });
  }
  pushSSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+250) });
  }
  pushTSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+287) });
  }
  pushUSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+302) });
  }
  pushVSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+303) });
  }
  pushWSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+305) });
  }
  pushZSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+319) });
  }
}
