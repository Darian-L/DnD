import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EditPage } from '../edit/edit';
import { Storage } from '@ionic/storage';
import { Repository } from '../../providers/repository';

@Component({
  selector: 'page-display',
  templateUrl: 'display.html'
})
export class DisplayPage {

  public diceRoll;
  public selectedSides: any = "A";
  public customSides;
  public sides;
  public char;

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private storage: Storage,
    public navParams: NavParams,
    private appRepo: Repository,
  ) {
  }

  ionViewDidLoad() {
    this.char = this.navParams.get('id');
    console.log(this.char)
  }

  navHomePage() {
    this.navCtrl.popToRoot()
    console.log("Home pushed")
  }

  pushEditPage() {
    let character = {
      key: this.char
    };
    this.navCtrl.push(EditPage, character)
    console.log("Edit pushed")
  }

  roll() {
    console.log(this.diceRoll = Math.floor(Math.random() * this.selectedSides) + 1)
    if (this.selectedSides == "A") {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Choose a number of sides.',
        buttons: ['Close']
      });
      alert.present()
    }
    else {
      if (this.selectedSides == '0') {
        let alert = this.alertCtrl.create({
          title: "Custom Roll",
          message: "Insert custom number of sides",
          cssClass: "normalStyle",
          inputs: [{
            name: "custom",
            placeholder: "Sides"
          }],
          buttons: [
            {
              text: "Cancel",
              role: "cancel",
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Roll',
              handler: data => {
                this.customSides = data.custom
                console.log(this.customSides);
                this.rollCustom();
              }
            }
          ]
        });
        console.log("Custom");
        alert.present()
      }
      else {
        if (this.diceRoll == '1') {
          let alert = this.alertCtrl.create({
            title: 'd' + this.selectedSides + ' roll=',
            message: this.diceRoll,
            cssClass: "fumbleStyle",
            buttons: ['Close']
          });
          console.log("Fumble");
          alert.present()
        }

        else {
          if (this.diceRoll == this.selectedSides) {
            let alert = this.alertCtrl.create({
              title: 'd' + this.selectedSides + ' roll=',
              message: this.diceRoll,
              cssClass: 'maxStyle',
              buttons: ['Close']
            });
            console.log("Crit")
            alert.present()
          }
          else {
            let alert = this.alertCtrl.create({
              title: 'd' + this.selectedSides + ' roll=',
              message: this.diceRoll,
              cssClass: 'normalStyle',
              buttons: ['Close']
            });
            alert.present()
          }
        }
      }
    }
  }

  rollCustom() {
    console.log(this.diceRoll = Math.floor(Math.random() * this.customSides) + 1)

    if (this.diceRoll == '1') {
      let alert = this.alertCtrl.create({
        title: 'd' + this.customSides + ' roll=',
        message: this.diceRoll,
        cssClass: 'fumbleStyle',
        buttons: ['Close']
      });
      console.log("Fumble");
      alert.present()
    }
    else {
      if (this.diceRoll == this.customSides) {
        let alert = this.alertCtrl.create({
          title: 'd' + this.customSides + ' roll=',
          message: this.diceRoll,
          cssClass: 'maxStyle',
          buttons: ['Close']
        });
        console.log("Crit");
        alert.present()
      }
      else {
        let alert = this.alertCtrl.create({
          title: 'd' + this.customSides + ' roll=',
          message: this.diceRoll,
          cssClass: 'normalStyle',
          buttons: ['Close']
        });
        alert.present()
      }
    }
  }

  rollSpecified(sides) {
    console.log(this.diceRoll = Math.floor(Math.random() * sides) + 1)

    if (this.diceRoll == '1') {
      let alert = this.alertCtrl.create({
        title: 'd' + sides + ' roll=',
        message: this.diceRoll,
        cssClass: 'fumbleStyle',
        buttons: ['Close']
      });
      console.log("Fumble");
      alert.present()
    }
    else {
      if (this.diceRoll == sides) {
        let alert = this.alertCtrl.create({
          title: 'd' + sides + ' roll=',
          message: this.diceRoll,
          cssClass: 'maxStyle',
          buttons: ['Close']
        });
        console.log("Crit");
        alert.present()
      }
      else {
        let alert = this.alertCtrl.create({
          title: 'd' + sides + ' roll=',
          message: this.diceRoll,
          cssClass: 'normalStyle',
          buttons: ['Close']
        });
        alert.present()
      }
    }
  }
}