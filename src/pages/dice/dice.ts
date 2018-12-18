import { Component } from "@angular/core";

@Component({
  selector: "page-dice",
  templateUrl: "dice.html"
})
export class DicePage {

  public diceRoll;
  public multiple;
  public selectedSides;
  public sides;
  public total;
  public output;
  public results = [];

  constructor() {
    this.multiple = "";
    this.selectedSides = "";
    }

  roll() {//TODO: set busy
    this.results = [];

      for ( let i = 0; i < this.multiple; i++) {
        console.log((this.diceRoll = Math.floor(Math.random() * this.selectedSides) + 1));
        this.results.push(this.diceRoll)
      };
        this.total = this.results.reduce(function(a, b) { return a + b; }, 0);
        this.output = this.results.toString();
        this.diceRoll = this.total;
    }

  rollSpecified(sides) {
    console.log((this.diceRoll = Math.floor(Math.random() * sides) + 1));
    this.output = "";
  }
}
