import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { DisplayPage } from "../display/display";
import { Repository } from "../../providers/repository";
import { CreatePage } from "../create/create";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public characters;
  public empty;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private appRepo: Repository,
  ) {}

  ionViewWillEnter() {
    this.characters = JSON.parse(this.appRepo.load("characters"));

    if(this.characters == null) {
      this.empty = true
    }
  }

  pushDisplayPage(index) {
    this.navCtrl.push(DisplayPage, { character: this.characters[index] });
  }

  createNewCharacter() {
    this.navCtrl.push(CreatePage);
  }
}
