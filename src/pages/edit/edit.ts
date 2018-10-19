import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DisplayPage } from '../display/display';
import { HomePage } from '../home/home';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class EditPage {

  private character;
  private formCharacter: FormGroup;

  constructor(public navCtrl: NavController,
    private storage: Storage,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    private formbuilder: FormBuilder,
    private toastCtrl: ToastController,
  ) {

    let arr = [1,2,3];
    arr.forEach(element => {
      
    });

    this.character = navParams.get('character');

    this.formCharacter = this.formbuilder.group({
      name: [this.character.name, Validators.required],
      race: [this.character.race],
      class: [this.character.class],

    });
    let character = {
      name: this.formCharacter.value.name,
      race: this.formCharacter.value.race,
      //id: Guid.create();
    }

  }

  logForm() {
    console.log(this.formCharacter.value)
  }

  saveEdit() {
    if (this.formCharacter.valid) {
      this.navCtrl.push(DisplayPage)
      console.log("Character Saved")
    } else {
        let toast = this.toastCtrl.create({
          message: 'Provide name',
          duration: 3000,
          position: 'top'
        });
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
            // this.storage.delete
            this.navCtrl.popToRoot()
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