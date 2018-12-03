import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { EditPage } from "../edit/edit";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Repository } from "../../providers/repository";
import { Autosize } from "../../providers/autosize";

@Component({
  selector: "page-display",
  templateUrl: "display.html"
})
export class DisplayPage {
  public characters;
  public diceRoll;
  public selectedSides: any = "A";
  public customSides;
  public sides;
  public character;
  public strmodifier;
  public dexmodifier;
  public conmodifier;
  public intmodifier;
  public wismodifier;
  public chamodifier;
  private displayCharacterForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public navParams: NavParams,
    private appRepo: Repository,
    private formbuilder: FormBuilder
  ) {
    this.character = this.navParams.get("character");
    console.log(this.character);

    this.displayCharacterForm = this.formbuilder.group({
      id: this.character.id,
      name: this.character.name,
      race: this.character.race,
      class: this.character.class,
      level: this.character.level,
      exp: this.character.exp,
      size: this.character.size,
      background: this.character.background,
      alignment: this.character.alignment,
      maxHP: this.character.maxHP,
      currentHP: [this.character.currentHP],
      hitdice: this.character.hitdice,
      ac: this.character.ac,
      initiative: this.character.initiative,
      pb: this.character.pb,
      landSpeed: this.character.landSpeed,
      flySpeed: this.character.flySpeed,
      swimSpeed: this.character.swimSpeed,
      climbSpeed: this.character.climbSpeed,
      burrowSpeed: this.character.burrowSpeed,
      str: this.character.str,
      dex: this.character.dex,
      con: this.character.con,
      int: this.character.int,
      wis: this.character.wis,
      cha: this.character.cha,
      savingThrowProf: this.character.savingThrowProf,
      skillProf: this.character.skillProf,
      armourProf: this.character.armourProf,
      weaponProf: this.character.weaponProf,
      toolProf: this.character.toolProf,
      senses: this.character.senses,
      feats: this.character.feats,
      damageResistances: this.character.damageResistances,
      languages: this.character.languages,
      gender: this.character.gender,
      age: this.character.age,
      height: this.character.height,
      weight: this.character.weight,
      eyeColour: this.character.eyeColour,
      skinColour: this.character.skinColour,
      hairColour: this.character.hairColour,
      definingFeatures: this.character.definingFeatures,
      notes1: [this.character.notes1],
      notes2: [this.character.notes2]
    });
  }

  ionViewDidLoad() {
    this.character = this.navParams.get("character");

    if (this.character.str != "") {
      this.strmodifier = Math.floor((this.character.str - 10) / 2);
    }
    if (this.character.dex != "") {
      this.dexmodifier = Math.floor((this.character.dex - 10) / 2);
    }
    if (this.character.con != "") {
      this.conmodifier = Math.floor((this.character.con - 10) / 2);
    }
    if (this.character.int != "") {
      this.intmodifier = Math.floor((this.character.int - 10) / 2);
    }
    if (this.character.wis != "") {
      this.wismodifier = Math.floor((this.character.wis - 10) / 2);
    }
    if (this.character.cha != "") {
      this.chamodifier = Math.floor((this.character.cha - 10) / 2);
    }
  }

  pushEditPage() {
    this.characters = JSON.parse(this.appRepo.load("characters"));
    let index = this.characters.findIndex(x => x.id == this.character.id);
    this.navCtrl.push(EditPage, { character: this.characters[index] });
    console.log("Edit pushed");
    console.log(this.character);
  }

  update(ev: any) {
    this.characters = JSON.parse(this.appRepo.load("characters"));

    let index = this.characters.findIndex(x => x.id == this.character.id);
    let character = this.displayCharacterForm.value;
    this.characters.splice(index, 1, character);
    this.appRepo.save("characters", JSON.stringify(this.characters));
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
}
