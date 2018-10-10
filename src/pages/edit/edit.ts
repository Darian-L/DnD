import { Component } from '@angular/core';
import { NavController, List } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DisplayPage } from '../display/display';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class EditPage {

  constructor(public navCtrl: NavController, private storage: Storage, public alertCtrl: AlertController) {

  }

  saveEdit() {
    // this.storage.set
    this.navCtrl.push(DisplayPage)
    console.log("Character Saved")
  }

  deleteEdit() {
    const confirm = this.alertCtrl.create({
      title: "Delete?",
      message: "Are you sure you want to delete this character?",
      buttons: [
        {
          text: "Confirm",
          handler: () => {
            // this.storage.delete
            this.navCtrl.push(HomePage)
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