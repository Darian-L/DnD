import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { HttpService } from "../../../providers/http-service";
import { SpellsDetailsPage } from "../spells/spells-details/spells-details"
import { Repository } from "../../../providers/repository";

@Component({
  selector: "page-spells",
  templateUrl: "spells.html"
})
export class SpellsPage {

  public response
  public class;
  public segments;
  public favourites;
  public isFavourites;
  public deleting
  public alphabetical
  public level

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private appRepo: Repository,
  ) {
    this.httpService.request("spells", succeed => {
      this.response = succeed;
    });

    this.class = [
      false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false
    ]

    this.segments = "0";
  }

  ionViewWillEnter() {
    this.favourites = JSON.parse(this.appRepo.load("favourites"));
    console.log(this.favourites);
    this.alphabetical = true
    this.level = false
    this.deleting = false
    this.favourites.sort(function(a, b) {return a.index-b.index});
    this.appRepo.save("favourites", JSON.stringify(this.favourites));
  }

  sortAlpha() {
      this.alphabetical = true;
      this.level = false;
      this.favourites.sort(function(a, b) {return a.index-b.index});
      this.appRepo.save("favourites", JSON.stringify(this.favourites));
  }

  sortLevels() {
      this.level = true;
      this.alphabetical = false;
      this.favourites.sort(function(a, b) {return a.level-b.level});
      this.appRepo.save("favourites", JSON.stringify(this.favourites));
  }

  toggleFavourites() {
    this.isFavourites = true
  }

  toggleAll() {
    this.isFavourites = false
  }

  show(number) {
    if (this.class[number] == true) {
       this.class[number] = false;
    } else {
      this.class[number] = true;
    }
    console.log("toggled", this.class[number])
  }

  removeFavourite(i) {
    console.log(i)
    this.favourites.splice(i, 1);
    this.favourites.sort(function(a, b) {return a.index-b.index});
    this.appRepo.save("favourites", JSON.stringify(this.favourites));
  }

  pushFavourite(i) {
  this.navCtrl.push(SpellsDetailsPage, { index: this.favourites[i].index });
  console.log("favourite")
  }

  pushASpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+1) });
  }
  pushBSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+22) });
  }
  pushCSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+36) });
  }
  pushDSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+71) });
  }
  pushESpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+95) });
  }
  pushFSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+104) });
  }
  pushGSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+132) });
  }
  pushHSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+149) });
  }
  pushISpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+165) });
  }
  pushJSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+175) });
  }
  pushKSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+176) });
  }
  pushLSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+177) });
  }
  pushMSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+186) });
  }
  pushNSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+213) });
  }
  pushPSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+214) });
  }
  pushRSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+238) });
  }
  pushSSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+250) });
  }
  pushTSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+287) });
  }
  pushUSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+302) });
  }
  pushVSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+303) });
  }
  pushWSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+305) });
  }
  pushZSpells(index){
    this.navCtrl.push(SpellsDetailsPage, { index: (index+319) });
  }
}
