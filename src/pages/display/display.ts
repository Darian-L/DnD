import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EditPage } from '../edit/edit';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-display',
  templateUrl: 'display.html'
})
export class DisplayPage {

  public diceRoll;
  public selectedSides = 0;
  public Char;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private storage: Storage, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.Char = this.navParams.get('Name');
    console.log(this.Char)
  }

  pushHomePage() {
    this.navCtrl.push(HomePage)
    console.log("Home pushed")
  }

  pushEditPage() {
    this.navCtrl.push(EditPage)
    console.log("Edit pushed")
  }

  roll() {
    console.log(this.diceRoll = Math.floor(Math.random() * this.selectedSides) + 1)
    if (this.selectedSides == 0) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Choose a number of sides.',
        buttons: ['Close']
      });
      console.log("Undefined");
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