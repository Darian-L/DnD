import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams, ToastController, Slides, Content } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { DisplayPage } from "../display/display";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Guid } from "../../providers/guid";
import { Repository } from "../../providers/repository";
import { Autosize } from '../../providers/autosize';

@Component({
  selector: "page-create",
  templateUrl: "create.html"
})
export class CreatePage {
  @ViewChild('slider') slider: Slides;
  @ViewChild(Content) content: Content;

  private newCharacterForm: FormGroup;
  public guidID;
  public characters;
  public segments;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    private formbuilder: FormBuilder,
    public guid: Guid,
    private toastCtrl: ToastController,
    private appRepo: Repository
  ) {
    this.guidID = this.guid.generateGuid();
    console.log(this.guidID);

    this.segments = "0"

    this.newCharacterForm = this.formbuilder.group({
      id: this.guidID,
      name: ["", Validators.required],
      race: [""],
      class: [""],
      level: [""],
      exp: [""],
      size: [""],
      background: [""],
      alignment: [""],
      maxHP: [""],
      currentHP: [""],
      hitdice: [""],
      ac: [""],
      initiative: [""],
      pb: [""],
      landSpeed: [""],
      flySpeed: [""],
      swimSpeed: [""],
      climbSpeed: [""],
      burrowSpeed: [""],
      str: [""],
      dex: [""],
      con: [""],
      int: [""],
      wis: [""],
      cha: [""],
      strSaveProf: [false],
      dexSaveProf: [false],
      conSaveProf: [false],
      intSaveProf: [false],
      wisSaveProf: [false],
      chaSaveProf: [false],
      acrobaticsProf: [false],
      animalHandlingProf: [false],
      arcanaProf: [false],
      athleticsProf: [false],
      deceptionProf: [false],
      historyProf: [false],
      insightProf: [false],
      intimidationProf: [false],
      investigationProf: [false],
      medicineProf: [false],
      natureProf: [false],
      perceptionProf: [false],
      performanceProf: [false],
      persuasionProf: [false],
      religionProf: [false],
      sleightofhandProf: [false],
      stealthProf: [false],
      survivalProf: [false],
      armourProf: [""],
      weaponProf: [""],
      toolProf: [""],
      senses: [""],
      feats: [""],
      damageResistances: [""],
      languages: [""],
      gender: [""],
      age: [""],
      height: [""],
      weight: [""],
      eyeColour: [""],
      skinColour: [""],
      hairColour: [""],
      definingFeatures: [""],
      spellcastingAbility: [""],
      spells: [""],
      notes1: [""],
      notes2: [""],
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

  saveCreate() {
    if (this.newCharacterForm.valid) {
      let character = this.newCharacterForm.value;
      this.characters = JSON.parse(this.appRepo.load("characters"));
      if (this.characters) {
        this.characters.push(character);
        this.appRepo.save("characters", JSON.stringify(this.characters));
      } else {
        let arr = [];
        arr.push(character);
        this.appRepo.save("characters", JSON.stringify(arr));
      }
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

  cancelCreate() {
    const confirm = this.alertCtrl.create({
      title: "Cancel?",
      message: "Are you sure you want to cancel?",
      buttons: [
        {
          text: "Confirm",
          handler: () => {
            this.navCtrl.popToRoot();
            console.log("Create cancelled");
          }
        },
        {
          text: "Cancel",
          handler: () => {
            console.log("Cancel cancelled");
          }
        }
      ]
    });
    confirm.present();
  }
}
