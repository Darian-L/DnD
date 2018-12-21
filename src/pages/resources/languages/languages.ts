import { Component } from "@angular/core";

@Component({
  selector: "page-languages",
  templateUrl: "languages.html"
})
export class LanguagesPage {

  public cards;

  constructor() {
    this.cards = [
      false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false
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
