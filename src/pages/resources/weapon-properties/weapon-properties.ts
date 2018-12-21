import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HttpService } from "../../../providers/http-service";
import { WeaponPropertiesDetailsPage } from "./weapon-properties-details/weapon-properties-details";

@Component({
  selector: "page-weapon-properties",
  templateUrl: "weapon-properties.html"
})
export class WeaponPropertiesPage {

  public cards;

  constructor() {
    this.cards = [
      false, false, false, false, false, false, false, false, false, false, false,
    ]
  }

  show(index) {
    if (this.cards[index] == true) {
       this.cards[index] = false;
    } else {
      this.cards[index] = true;
    }
    console.log("toggled", this.cards[index])
  }
}
