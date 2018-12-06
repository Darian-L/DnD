import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams, Slides, Content } from "ionic-angular";
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
  @ViewChild('slider') slider: Slides;
  @ViewChild(Content) content: Content;

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
  public segments;
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

    this.segments = "0"

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

    switch (this.character.strSaveProf) {
      case "single": {
        this.strSave = this.strmodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.strSave = this.strmodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.strSave = this.strmodifier;
      }
    }
    switch (this.character.dexSaveProf) {
      case "single": {
        this.dexSave = this.dexmodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.dexSave = this.dexmodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.dexSave = this.dexmodifier;
      }
    }
    switch (this.character.conSaveProf) {
      case "single": {
        this.conSave = this.conmodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.conSave = this.conmodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.conSave = this.conmodifier;
      }
    }
    switch (this.character.intSaveProf) {
      case "single": {
        this.intSave = this.intmodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.intSave = this.intmodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.intSave = this.intmodifier;
      }
    }
    switch (this.character.wisSaveProf) {
      case "single": {
        this.wisSave = this.wismodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.wisSave = this.wismodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.wisSave = this.wismodifier;
      }
    }
    switch (this.character.chaSaveProf) {
      case "single": {
        this.chaSave = this.chamodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.chaSave = this.chamodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.chaSave = this.chamodifier;
      }
    }

    switch (this.character.acrobaticsProf) {
      case "single": {
        this.acrProf = this.dexmodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.acrProf = this.dexmodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.acrProf = this.dexmodifier;
      }
    }
    switch (this.character.animalHandlingProf) {
      case "single": {
        this.aniProf = this.wismodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.aniProf = this.wismodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.aniProf = this.wismodifier;
      }
    }
    switch (this.character.arcanaProf) {
      case "single": {
        this.arcProf = this.intmodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.arcProf = this.intmodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.arcProf = this.intmodifier;
      }
    }
    switch (this.character.athleticsProf) {
      case "single": {
        this.athProf = this.strmodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.athProf = this.strmodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.athProf = this.strmodifier;
      }
    }
    switch (this.character.deceptionProf) {
      case "single": {
        this.decProf = this.chamodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.decProf = this.chamodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.decProf = this.chamodifier;
      }
    }
    switch (this.character.historyProf) {
      case "single": {
        this.hisProf = this.intmodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.hisProf = this.intmodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.hisProf = this.intmodifier;
      }
    }
    switch (this.character.insightProf) {
      case "single": {
        this.insProf = this.wismodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.insProf = this.wismodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.insProf = this.wismodifier;
      }
    }
    switch (this.character.intimidationProf) {
      case "single": {
        this.intProf = this.chamodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.intProf = this.chamodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.intProf = this.chamodifier;
      }
    }
    switch (this.character.investigationProf) {
      case "single": {
        this.invProf = this.intmodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.invProf = this.intmodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.invProf = this.intmodifier;
      }
    }
    switch (this.character.medicineProf) {
      case "single": {
        this.medProf = this.wismodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.medProf = this.wismodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.medProf = this.wismodifier;
      }
    }
    switch (this.character.natureProf) {
      case "single": {
        this.natProf = this.intmodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.natProf = this.intmodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.natProf = this.intmodifier;
      }
    }
    switch (this.character.perceptionProf) {
      case "single": {
        this.percProf = this.wismodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.percProf = this.wismodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.percProf = this.wismodifier;
      }
    }
    switch (this.character.performanceProf) {
      case "single": {
        this.perfProf = this.chamodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.perfProf = this.chamodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.perfProf = this.chamodifier;
      }
    }
    switch (this.character.persuasionProf) {
      case "single": {
        this.persProf = this.chamodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.persProf = this.chamodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.persProf = this.chamodifier;
      }
    }
    switch (this.character.religionProf) {
      case "single": {
        this.relProf = this.intmodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.relProf = this.intmodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.relProf = this.intmodifier;
      }
    }
    switch (this.character.sleightofhandProf) {
      case "single": {
        this.sleProf = this.dexmodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.sleProf = this.dexmodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.sleProf = this.dexmodifier;
      }
    }
    switch (this.character.stealthProf) {
      case "single": {
        this.steProf = this.dexmodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.steProf = this.dexmodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.steProf = this.dexmodifier;
      }
    }
    switch (this.character.survivalProf) {
      case "single": {
        this.surProf = this.wismodifier + Number(this.character.pb);
        break;
      }
      case "double": {
        this.surProf = this.wismodifier + (Number(this.character.pb)*2);
        break;
      }
      default: {
        this.surProf = this.wismodifier;
      }
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
