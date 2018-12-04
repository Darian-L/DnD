import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { EditPage } from "../edit/edit";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Repository } from "../../providers/repository";
import { Autosize } from "../../providers/autosize";
import { templateJitUrl } from "@angular/compiler";

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
  public spellMod;
  public spellDC;
  public strSave;
  public dexSave;
  public conSave;
  public intSave;
  public wisSave;
  public chaSave;
  public acrProf;
  public aniProf;
  public arcProf;
  public athProf;
  public decProf;
  public hisProf;
  public insProf;
  public intProf;
  public invProf;
  public medProf;
  public natProf;
  public percProf;
  public perfProf;
  public persProf;
  public relProf;
  public sleProf;
  public steProf;
  public surProf;
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
      strSaveProf: this.character.strSaveProf,
      dexSaveProf: this.character.dexSaveProf,
      conSaveProf: this.character.conSaveProf,
      intSaveProf: this.character.intSaveProf,
      wisSaveProf: this.character.wisSaveProf,
      chaSaveProf: this.character.chaSaveProf,
      acrobaticsProf: this.character.acrobaticsProf,
      animalHandlingProf: this.character.animalHandlingProf,
      arcanaProf: this.character.arcanaProf,
      athleticsProf: this.character.athleticsProf,
      deceptionProf: this.character.deceptionProf,
      historyProf: this.character.historyProf,
      insightProf: this.character.insightProf,
      intimidationProf: this.character.intimidationProf,
      investigationProf: this.character.investigationProf,
      medicineProf: this.character.medicineProf,
      natureProf:this.character.natureProf,
      perceptionProf: this.character.perceptionProf,
      performanceProf: this.character.performanceProf,
      persuasionProf: this.character.persuasionProf,
      religionProf: this.character.religionProf,
      sleightofhandProf: this.character.sleightofhandProf,
      stealthProf: this.character.stealthProf,
      survivalProf: this.character.survivalProf,
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
      spellcastingAbility: this.character.spellcastingAbility,
      spells: this.character.spells,
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

    if (this.character.strSaveProf == "true") {
      this.strSave = this.strmodifier + Number(this.character.pb);
    } else {
      this.strSave = this.strmodifier;
    }
    if (this.character.dexSaveProf == "true") {
      this.dexSave = this.dexmodifier + Number(this.character.pb);
    } else {
      this.dexSave = this.dexmodifier;
    }
    if (this.character.conSaveProf == "true") {
      this.conSave = this.conmodifier + Number(this.character.pb);
    } else {
      this.conSave = this.conmodifier;
    }
    if (this.character.intSaveProf == "true") {
      this.intSave = this.intmodifier + Number(this.character.pb);
    } else {
      this.intSave = this.intmodifier;
    }
    if (this.character.wisSaveProf == "true") {
      this.wisSave = this.wismodifier + Number(this.character.pb);
    } else {
      this.wisSave = this.wismodifier;
    }
    if (this.character.chaSaveProf == "true") {
      this.chaSave = this.chamodifier + Number(this.character.pb);
    } else {
      this.chaSave = this.chamodifier;
    }

    if (this.character.acrobaticsProf == "true") {
      this.acrProf = this.dexmodifier + Number(this.character.pb);
    } else {
      this.acrProf = this.dexmodifier;
    }
    if (this.character.animalHandlingProf == "true") {
      this.aniProf = this.wismodifier + Number(this.character.pb);
    } else {
      this.aniProf = this.wismodifier;
    }
    if (this.character.arcanaProf == "true") {
      this.arcProf = this.intmodifier + Number(this.character.pb);
    } else {
      this.arcProf = this.intmodifier;
    }
    if (this.character.athleticsProf == "true") {
      this.athProf = this.strmodifier + Number(this.character.pb);
    } else {
      this.athProf = this.strmodifier;
    }
    if (this.character.deceptionProf == "true") {
      this.decProf = this.chamodifier + Number(this.character.pb);
    } else {
      this.decProf = this.chamodifier;
    }
    if (this.character.historyProf == "true") {
      this.hisProf = this.intmodifier + Number(this.character.pb);
    } else {
      this.hisProf = this.intmodifier;
    }
    if (this.character.insightProf == "true") {
      this.insProf = this.wismodifier + Number(this.character.pb);
    } else {
      this.insProf = this.wismodifier;
    }
    if (this.character.intimidationProf == "true") {
      this.intProf = this.chamodifier + Number(this.character.pb);
    } else {
      this.intProf = this.chamodifier;
    }
    if (this.character.investigationProf == "true") {
      this.invProf = this.intmodifier + Number(this.character.pb);
    } else {
      this.invProf = this.intmodifier;
    }
    if (this.character.medicineProf == "true") {
      this.medProf = this.wismodifier + Number(this.character.pb);
    } else {
      this.medProf = this.wismodifier;
    }
    if (this.character.natureProf == "true") {
      this.natProf = this.intmodifier + Number(this.character.pb);
    } else {
      this.natProf = this.intmodifier;
    }
    if (this.character.perceptionProf == "true") {
      this.percProf = this.wismodifier + Number(this.character.pb);
    } else {
      this.percProf = this.wismodifier;
    }
    if (this.character.performanceProf == "true") {
      this.perfProf = this.chamodifier + Number(this.character.pb);
    } else {
      this.perfProf = this.chamodifier;
    }
    if (this.character.persuasionProf == "true") {
      this.persProf = this.chamodifier + Number(this.character.pb);
    } else {
      this.persProf = this.chamodifier;
    }
    if (this.character.religionProf == "true") {
      this.relProf = this.intmodifier + Number(this.character.pb);
    } else {
      this.relProf = this.intmodifier;
    }
    if (this.character.sleightofhandProf == "true") {
      this.sleProf = this.dexmodifier + Number(this.character.pb);
    } else {
      this.sleProf = this.dexmodifier;
    }
    if (this.character.stealthProf == "true") {
      this.steProf = this.dexmodifier + Number(this.character.pb);
    } else {
      this.steProf = this.dexmodifier;
    }
    if (this.character.survivalProf == "true") {
      this.surProf = this.wismodifier + Number(this.character.pb);
    } else {
      this.surProf = this.wismodifier;
    }

    switch (this.character.spellcastingAbility) {
      case "strength": {
        this.spellDC = 8 + this.strmodifier + Number(this.character.pb);
        break;
      }
      case "dexterity": {
        this.spellDC = 8 + this.conmodifier + Number(this.character.pb);
        break;
      }
      case "constitution": {
        this.spellDC = 8 + this.dexmodifier + Number(this.character.pb);
        break;
      }
      case "intelligence": {
        this.spellDC = 8 + this.intmodifier + Number(this.character.pb);
        break;
      }
      case "wisdom": {
        this.spellDC = 8 + this.wismodifier + Number(this.character.pb);
        break;
      }
      case "charisma": {
        this.spellDC = 8 + this.chamodifier + Number(this.character.pb);
        break;
      }
    }
    this.spellMod = this.spellDC - 8;
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
