import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams, ToastController, Slides, Content } from "ionic-angular";
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
  @ViewChild('slider') slider: Slides;
  @ViewChild(Content) content: Content;

  public characters;
  public character;
  public segments;
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

    this.segments = "0"

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
      strSaveProf: [this.character.strSaveProf],
      dexSaveProf: [this.character.dexSaveProf],
      conSaveProf: [this.character.conSaveProf],
      intSaveProf: [this.character.intSaveProf],
      wisSaveProf: [this.character.wisSaveProf],
      chaSaveProf: [this.character.chaSaveProf],
      acrobaticsProf: [this.character.acrobaticsProf],
      animalHandlingProf: [this.character.animalHandlingProf],
      arcanaProf: [this.character.arcanaProf],
      athleticsProf: [this.character.athleticsProf],
      deceptionProf: [this.character.deceptionProf],
      historyProf: [this.character.historyProf],
      insightProf: [this.character.insightProf],
      intimidationProf: [this.character.intimidationProf],
      investigationProf: [this.character.investigationProf],
      medicineProf: [this.character.medicineProf],
      natureProf: [this.character.natureProf],
      perceptionProf: [this.character.perceptionProf],
      performanceProf: [this.character.performanceProf],
      persuasionProf: [this.character.persuasionProf],
      religionProf: [this.character.religionProf],
      sleightofhandProf: [this.character.sleightofhandProf],
      stealthProf: [this.character.stealthProf],
      survivalProf: [this.character.survivalProf],
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
      spellcastingAbility: [this.character.spellcastingAbility],
      spells: [this.character.spells],
      notes1: [this.character.notes1],
      notes2: [this.character.notes2],
    });
  }

  selectedTab(ind) {
    this.slider.slideTo(ind)
  }

  ngAfterViewInit() {
    this.slider.autoHeight = true;
  }

  moveButton($event) {
    this.content.scrollToTop(1000);
    this.segments = $event._snapIndex.toString()
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
        this.navCtrl.remove(currentIndex-1);
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
