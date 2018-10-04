import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-display',
  templateUrl: 'display.html'
})
export class DisplayPage {

  public diceRoll

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private storage: Storage) {

  }
  
  pushHomePage(){
    this.navCtrl.push(HomePage)
  }


  roll(sides) {
    console.log(this.diceRoll = Math.floor(Math.random() * sides)+1)
      
    if (this.diceRoll == '1')
      {
      let alert = this.alertCtrl.create({
      title: 'd'+sides+' roll=',
      message: this.diceRoll,
      cssClass: 'fumbleStyle',
      buttons: ['Close']
      });
      alert.present()
      }
      else {
        if(this.diceRoll == sides)
        {
          let alert = this.alertCtrl.create({
            title: 'd'+sides+' roll=',
            message: this.diceRoll,
            cssClass: 'maxStyle',
            buttons: ['Close']
            });
            alert.present()
        }
        else{
          let alert = this.alertCtrl.create({
            title: 'd'+sides+' roll=',
            message: this.diceRoll,
            cssClass: 'normalStyle',
            buttons: ['Close']
            });
            alert.present()
        }
      }
    }
  }