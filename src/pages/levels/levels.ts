import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-levels',
    templateUrl: 'levels.html'
})
export class LevelsPage {

    constructor(public navCtrl: NavController) {

    }

    pushHomePage() {
        this.navCtrl.push(HomePage)
      }

}