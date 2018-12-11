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
import { summaryFileName } from "@angular/compiler/src/aot/util";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public diceRoll;
  public multiple;
  public selectedSides;
  public customSides;
  public sides;
  public characters;
  public results = [];

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
    this.multiple = 1;
    this.selectedSides = "A"
  }

  roll() {

    this.results = [];

    if (this.multiple == 1) {
    console.log(
      (this.diceRoll = Math.floor(Math.random() * this.selectedSides) + 1)
    );
    console.log(this.multiple + " multiple 1")

    switch (this.selectedSides) {
    case "A": {
      let alert = this.alertCtrl.create({
        title: "Error",
        message: "Choose a number of sides.",
        buttons: ["Close"]
      });
      alert.present();
      break;
    }
      case "0": {
        let alert = this.alertCtrl.create({
          title: "Custom Roll",
          message: "Insert custom number of sides",
          cssClass: "normalStyle",
          inputs: [
            {
              type: "number",
              name: "custom",
              placeholder: "Sides",
              value: this.customSides
            }
          ],
          buttons: [
            {
              text: "Roll",
              handler: data => {
                this.customSides = data.custom;
                console.log(this.customSides);
                this.rollCustom();
              }
            },
            {
              text: "Cancel",
              role: "cancel",
              handler: data => {
                console.log("Cancel clicked");
              }
            }
          ]
        });
        console.log("Custom");
        alert.present();
        break;
      } default: {
        if (this.diceRoll == "1") {
            let alert = this.alertCtrl.create({
              title: this.multiple + "d" + this.selectedSides + " roll=",
              message: this.diceRoll,
              cssClass: "fumbleStyle",
              buttons: ["Close"]
            });
            console.log("Fumble");
            alert.present();
          } else {
          if (this.diceRoll == this.selectedSides) {
            let alert = this.alertCtrl.create({
              title: this.multiple + "d" + this.selectedSides + " roll=",
              message: this.diceRoll,
              cssClass: "maxStyle",
              buttons: ["Close"]
            });
            console.log("Crit");
            alert.present();
          } else {
            let alert = this.alertCtrl.create({
              title: this.multiple + "d" + this.selectedSides + " roll=",
              message: this.diceRoll,
              cssClass: "normalStyle",
              buttons: ["Close"]
            });
            alert.present();
          }
        }
        }
      }
    } else {
      switch (this.selectedSides) {
        case "A": {
          let alert = this.alertCtrl.create({
            title: "Error",
            message: "Choose a number of sides.",
            buttons: ["Close"]
          });
          alert.present();
          break;
        }
        case "0": {
          let alert = this.alertCtrl.create({
            title: "Custom Roll",
            message: "Insert custom number of sides",
            cssClass: "normalStyle",
            inputs: [
              {
                type: "number",
                name: "custom",
                placeholder: "Sides",
                value: this.customSides
              }
            ],
            buttons: [
              {
                text: "Roll",
                handler: data => {
                  this.customSides = data.custom;
                  console.log(this.customSides);
                  for ( let i = 0; i < this.multiple; i++) {
                    console.log((this.diceRoll = Math.floor(Math.random() * this.customSides) + 1));
                    this.results.push(this.diceRoll)
                  };
                  let alert = this.alertCtrl.create({
                    title: this.multiple + "d" + this.customSides + " roll = " + this.results.reduce(function(a, b) { return a + b; }, 0),
                    message: this.results.toString(),
                    cssClass: "normalStyle",
                    buttons: ["Close"]
                  });
                  alert.present();
                }
              },
              {
                text: "Cancel",
                role: "cancel",
                handler: data => {
                  console.log("Cancel clicked");
                }
              }
            ]
          });
          console.log("Custom");
          alert.present();
          break;
        }
        default: {
        for ( let i = 0; i < this.multiple; i++) {
          console.log((this.diceRoll = Math.floor(Math.random() * this.selectedSides) + 1));
          this.results.push(this.diceRoll)
        };
        let alert = this.alertCtrl.create({
          title: this.multiple + "d" + this.selectedSides + " roll = " + this.results.reduce(function(a, b) { return a + b; }, 0),
          message: this.results.toString(),
          cssClass: "normalStyle",
          buttons: ["Close"]
        });
        alert.present();
        break;
      }
    }}
  }

  rollCustom() {
    console.log(
      (this.diceRoll = Math.floor(Math.random() * this.customSides) + 1)
    );

      if (this.diceRoll == "1") {
        let alert = this.alertCtrl.create({
          title: this.multiple + "d" + this.customSides + " roll=",
          message: this.diceRoll,
          cssClass: "fumbleStyle",
          buttons: ["Close"]
        });
        console.log("Fumble");
        alert.present();
      } else {
        if (this.diceRoll == this.customSides) {
        let alert = this.alertCtrl.create({
          title: this.multiple + "d" + this.customSides + " roll=",
          message: this.diceRoll,
          cssClass: "maxStyle",
          buttons: ["Close"]
        });
        console.log("Crit");
        alert.present();
      } else {
        let alert = this.alertCtrl.create({
          title: this.multiple + "d" + this.customSides + " roll=",
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
          title: 1 + "d" + sides + " roll=",
          message: this.diceRoll,
          cssClass: "fumbleStyle",
          buttons: ["Close"]
        });
        console.log("Fumble");
        alert.present();
      } else {
        if (this.diceRoll == sides) {
        let alert = this.alertCtrl.create({
          title: 1 + "d" + sides + " roll=",
          message: this.diceRoll,
          cssClass: "maxStyle",
          buttons: ["Close"]
        });
        console.log("Crit");
        alert.present();
      } else {
        let alert = this.alertCtrl.create({
          title: 1 + "d" + sides + " roll=",
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
