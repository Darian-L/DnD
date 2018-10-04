import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public diceRoll;
  public point;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private Storage: Storage) {
    Storage.set('name', 'Darian');
    let name = localStorage.getItem('name');
    console.log(name);
  }




  roll(sides) {
    console.log(this.diceRoll = Math.floor(Math.random() * sides) + 1)

    if (this.diceRoll == '1') {
      let alert = this.alertCtrl.create({
        title: 'd' + sides + ' roll=',
        message: this.diceRoll,
        cssClass: 'fumbleStyle',
        buttons: ['Close']
      });
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
// TODO: figure this out
// test(id: string) {
//   if (id=="yes"){
//     this.point="positive"
//     console.log(this.point); }
//     else { this.point="negative";
//     console.log(this.point)}
//   }

}
