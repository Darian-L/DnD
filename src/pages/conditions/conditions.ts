import { Component } from '@angular/core';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-conditions',
  templateUrl: 'conditions.html'
})
export class ConditionsPage {

  public cards;

  constructor() {

    this.cards = [
      false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false
    ]

  }
  show(index) {
    if (this.cards[index] == true) {
       this.cards[index] = false;
    } else {
      this.cards[index] = true;
    }
    console.log("toggled", this.cards[index])
  }
}
