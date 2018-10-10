import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ConditionsPage } from '../conditions/conditions';
import { LevelsPage } from '../levels/levels';
import { EditPage } from '../edit/edit';
import { DisplayPage } from '../display/display';


// import { RollsProvider } from '../Providers/Rolls';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public diceRoll;
  public point;
  public selectedSides = 0;
  public character;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private Storage: Storage) {

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

  pushDisplayPage(Character) {
    let data = {
      Name: Character
    };
    this.navCtrl.push(DisplayPage, data)
    console.log(Character)
  }

  pushEditPage() {
    this.navCtrl.push(EditPage)
  }

  pushConditionsPage() {
    this.navCtrl.push(ConditionsPage)
    console.log("Conditions pushed")
  }

  pushLevelsPage() {
    this.navCtrl.push(LevelsPage)
    console.log("Levels pushed")
  }

  // TODO: figure this out
  // test(id: string) {
  //   if (id=="yes"){
  //     this.point="positive"
  //     console.log(this.point); }
  //     else { this.point="negative";
  //     console.log(this.point)}
  //   }

}
