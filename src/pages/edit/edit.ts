import { Component } from "@angular/core";
import { NavController, NavParams, ToastController } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { DisplayPage } from "../display/display";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Repository } from "../../providers/repository";
import { Autosize } from '../../providers/autosize';

@Component({
  selector: "page-edit",
  templateUrl: "edit.html"
})
export class EditPage {
  public characters;
  public character;
  private characterForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    private formbuilder: FormBuilder,
    private toastCtrl: ToastController,
    private appRepo: Repository
  ) {
    this.character = this.navParams.get("character");
    console.log(this.character);

    this.characterForm = this.formbuilder.group({
      id: this.character.id,
      name: [this.character.name, Validators.required],
      race: [this.character.race],
      class: [this.character.class],
      level: [this.character.level],
      exp: [this.character.exp],
      size: [this.character.size],
      background: [this.character.background],
      alignment: [this.character.alignment],
      maxHP: [this.character.maxHP],
      currentHP: [this.character.currentHP],
      hitdice: [this.character.hitdice],
      ac: [this.character.ac],
      initiative: [this.character.initiative],
      pb: [this.character.pb],
      landSpeed: [this.character.landSpeed],
      flySpeed: [this.character.flySpeed],
      swimSpeed: [this.character.swimSpeed],
      climbSpeed: [this.character.climbSpeed],
      burrowSpeed: [this.character.burrowSpeed],
      str: [this.character.str],
      dex: [this.character.dex],
      con: [this.character.con],
      int: [this.character.int],
      wis: [this.character.wis],
      cha: [this.character.cha],
      savingThrowProf: [this.character.savingThrowProf],
      skillProf: [this.character.skillProf],
      armourProf: [this.character.armourProf],
      weaponProf: [this.character.weaponProf],
      toolProf: [this.character.toolProf],
      senses: [this.character.senses],
      feats: [this.character.feats],
      damageResistances: [this.character.damageResistances],
      languages: [this.character.languages],
      gender: [this.character.gender],
      age: [this.character.age],
      height: [this.character.height],
      weight: [this.character.weight],
      eyeColour: [this.character.eyeColour],
      skinColour: [this.character.skinColour],
      hairColour: [this.character.hairColour],
      definingFeatures: [this.character.definingFeatures],
      notes1: [this.character.notes1],
      notes2: [this.character.notes2],
    });
  }

  logForm() {
    console.log(this.characterForm.value);
  }

  saveEdit() {
    if (this.characterForm.valid) {
      this.characters = JSON.parse(this.appRepo.load("characters"));

      let index = this.characters.findIndex(x => x.id == this.character.id);
      let character = this.characterForm.value;
      this.characters.splice(index, 1, character);
      this.appRepo.save("characters", JSON.stringify(this.characters));
      let currentIndex = this.navCtrl.getActive().index;
      this.navCtrl.push(DisplayPage, { character }).then(() => {
        this.navCtrl.remove(currentIndex);
      });
    } else {
      let toast = this.toastCtrl.create({
        message: "Provide name",
        duration: 2000,
        position: "bottom",
        cssClass: "toast"
      });
      toast.present();
    }
  }

  deleteEdit() {
    const confirm = this.alertCtrl.create({
      title: "Delete?",
      message: "Are you sure you want to delete this character?",
      buttons: [
        {
          text: "Confirm",
          handler: () => {
            this.characters = JSON.parse(this.appRepo.load("characters"));
            let index = this.characters.findIndex(
              x => x.id == this.character.id
            );
            this.characters.splice(index, 1);
            this.appRepo.save("characters", JSON.stringify(this.characters));
            this.navCtrl.popToRoot();
            console.log("Delete confirmed");
          }
        },
        {
          text: "Cancel",
          handler: () => {
            console.log("Delete cancelled");
          }
        }
      ]
    });
    confirm.present();
  }
}
