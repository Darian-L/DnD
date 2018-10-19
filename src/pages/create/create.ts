import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DisplayPage } from '../display/display';
import { HomePage } from '../home/home';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Guid } from '../../providers/guid';
import { Repository } from '../../providers/repository';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {

  private character;
  private newCharacter: FormGroup;
  private guidID;

  constructor(public navCtrl: NavController,
    private storage: Storage,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    private formbuilder: FormBuilder,
    public guid: Guid,
    private toastCtrl: ToastController,
    private appRepo: Repository,
  ) {

    this.guidID = this.guid.generateGuid()
    console.log(this.guidID)

    // let arr = [1,2,3];
    // arr.forEach(element => {

    // });

    this.newCharacter = this.formbuilder.group({
      name: ["", Validators.required],
      race: [""],
      class: [""]
    });


    let character = {
      id: this.guidID,
      name: this.newCharacter.value.name,
      race: this.newCharacter.value.race,
      class: this.newCharacter.value.class,

    }
  }

  saveCreate() {
    if (this.newCharacter.valid) {
      console.log(this.newCharacter.value);
      this.appRepo.save("characters", JSON.stringify(this.character))
      console.log("Character Saved");
      this.navCtrl.push(DisplayPage, this.guidID);
    } else {
      console.log("Input prompted")
      let toast = this.toastCtrl.create({
        message: 'Provide name',
        duration: 2000,
        position: 'bottom',
        cssClass: 'toast'
      });
      toast.present();
    }
  }

  deleteCreate() {
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