import { Component, ViewChild } from "@angular/core";
// import { AnimationService, AnimationBuilder } from "css-animator";

@Component({
  selector: "page-dice",
  templateUrl: "dice.html"
})
export class DicePage {
@ViewChild('myElement') myElem;

  public diceRoll;
  public multiple;
  public selectedSides;
  public sides;
  public total;
  public output;
  public results = [];
  // private animator: AnimationBuilder

  constructor(//public animationService: AnimationService) {
  ){ this.multiple = "";
    this.selectedSides = "";
    // this.animator = animationService.builder();
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
        // this.animator.setType('pulse').show(this.myElem.nativeElement);
        // this.animator.setDuration(400)
    }

  rollSpecified(sides) {
    console.log((this.diceRoll = Math.floor(Math.random() * sides) + 1));
    this.output = "";
    // this.animator.setType('pulse').show(this.myElem.nativeElement);
    // this.animator.setDuration(400)
  }
}
