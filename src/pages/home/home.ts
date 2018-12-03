import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { ConditionsPage } from "../conditions/conditions";
import { LevelsPage } from "../levels/levels";
import { DisplayPage } from "../display/display";
import { Repository } from "../../providers/repository";
import { CreatePage } from "../create/create";
import { Guid } from "../../providers/guid";
import { RollProvider } from "../../providers/rollprovider";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public diceRoll;
  public selectedSides: any = "A";
  public customSides;
  public sides;
  public characters;

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public navParams: NavParams,
    private appRepo: Repository,
    public guid: Guid
    // public rollprovider: RollProvider,
  ) {}

  ionViewWillEnter() {
    this.characters = JSON.parse(this.appRepo.load("characters"));
  }

  roll() {
    console.log(
      (this.diceRoll = Math.floor(Math.random() * this.selectedSides) + 1)
    );
    if (this.selectedSides == "A") {
      let alert = this.alertCtrl.create({
        title: "Error",
        message: "Choose a number of sides.",
        buttons: ["Close"]
      });
      alert.present();
    } else {
      if (this.selectedSides == "0") {
        let alert = this.alertCtrl.create({
          title: "Custom Roll",
          message: "Insert custom number of sides",
          cssClass: "normalStyle",
          inputs: [
            {
              name: "custom",
              placeholder: "Sides",
              value: this.customSides
            }
          ],
          buttons: [
            {
              text: "Cancel",
              role: "cancel",
              handler: data => {
                console.log("Cancel clicked");
              }
            },
            {
              text: "Roll",
              handler: data => {
                this.customSides = data.custom;
                console.log(this.customSides);
                this.rollCustom();
              }
            }
          ]
        });
        console.log("Custom");
        alert.present();
      } else {
        if (this.diceRoll == "1") {
          let alert = this.alertCtrl.create({
            title: "d" + this.selectedSides + " roll=",
            message: this.diceRoll,
            cssClass: "fumbleStyle",
            buttons: ["Close"]
          });
          console.log("Fumble");
          alert.present();
        } else {
          if (this.diceRoll == this.selectedSides) {
            let alert = this.alertCtrl.create({
              title: "d" + this.selectedSides + " roll=",
              message: this.diceRoll,
              cssClass: "maxStyle",
              buttons: ["Close"]
            });
            console.log("Crit");
            alert.present();
          } else {
            let alert = this.alertCtrl.create({
              title: "d" + this.selectedSides + " roll=",
              message: this.diceRoll,
              cssClass: "normalStyle",
              buttons: ["Close"]
            });
            alert.present();
          }
        }
      }
    }
  }

  rollCustom() {
    console.log(
      (this.diceRoll = Math.floor(Math.random() * this.customSides) + 1)
    );

    if (this.diceRoll == "1") {
      let alert = this.alertCtrl.create({
        title: "d" + this.customSides + " roll=",
        message: this.diceRoll,
        cssClass: "fumbleStyle",
        buttons: ["Close"]
      });
      console.log("Fumble");
      alert.present();
    } else {
      if (this.diceRoll == this.customSides) {
        let alert = this.alertCtrl.create({
          title: "d" + this.customSides + " roll=",
          message: this.diceRoll,
          cssClass: "maxStyle",
          buttons: ["Close"]
        });
        console.log("Crit");
        alert.present();
      } else {
        let alert = this.alertCtrl.create({
          title: "d" + this.customSides + " roll=",
          message: this.diceRoll,
          cssClass: "normalStyle",
          buttons: ["Close"]
        });
        alert.present();
      }
    }
  }

  rollSpecified(sides) {
    console.log((this.diceRoll = Math.floor(Math.random() * sides) + 1));

    if (this.diceRoll == "1") {
      let alert = this.alertCtrl.create({
        title: "d" + sides + " roll=",
        message: this.diceRoll,
        cssClass: "fumbleStyle",
        buttons: ["Close"]
      });
      console.log("Fumble");
      alert.present();
    } else {
      if (this.diceRoll == sides) {
        let alert = this.alertCtrl.create({
          title: "d" + sides + " roll=",
          message: this.diceRoll,
          cssClass: "maxStyle",
          buttons: ["Close"]
        });
        console.log("Crit");
        alert.present();
      } else {
        let alert = this.alertCtrl.create({
          title: "d" + sides + " roll=",
          message: this.diceRoll,
          cssClass: "normalStyle",
          buttons: ["Close"]
        });
        alert.present();
      }
    }
  }

  pushDisplayPage(index) {
    this.navCtrl.push(DisplayPage, { character: this.characters[index] });
  }

  createNewCharacter() {
    this.navCtrl.push(CreatePage);
  }

  pushConditionsPage() {
    this.navCtrl.push(ConditionsPage);
    console.log("Conditions pushed");
  }

  pushLevelsPage() {
    this.navCtrl.push(LevelsPage);
    console.log("Levels pushed");
  }
}
