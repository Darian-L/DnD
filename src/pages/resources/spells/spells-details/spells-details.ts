import { Component } from "@angular/core";
import { NavController, NavParams, ToastController } from "ionic-angular";
import { HttpService } from "../../../../providers/http-service";
import { Repository } from "../../../../providers/repository";

@Component({
  selector: "page-spells-details",
  templateUrl: "spells-details.html"
})
export class SpellsDetailsPage {
  public response;
  private index;
  private favourites;
  private spell;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private appRepo: Repository,
    private toastCtrl: ToastController,
  ) {
    this.index = this.navParams.get("index");
    console.log(this.index);

    this.httpService.request("spells/" + this.index, succeed => {
      this.response = succeed;
    });

    this.favourites = JSON.parse(this.appRepo.load("favourites"));
    console.log(this.favourites);
  }

  favouriteButton() {
      this.spell = {
      index: this.response.index,
      name: this.response.name,
      level: this.response.level,
      };

      console.log(this.spell.name)

    if (this.favourites) {
    this.favourites = JSON.parse(this.appRepo.load("favourites"));
      let id = this.favourites.findIndex(x => x.name == this.spell.name);
      console.log(id);

      if (id == -1) {
      this.favourites.push(this.spell);
      this.favourites.sort(function(a, b) {return a.index-b.index})
      this.appRepo.save("favourites", JSON.stringify(this.favourites));
      console.log(this.favourites);
      let toast = this.toastCtrl.create({
        message: "Added to Favourites",
        duration: 2000,
        position: "bottom",
        cssClass: "toast"
      });
      toast.present();}
      else {
        this.favourites.splice(id, 1, this.spell);
        this.favourites.sort(function(a, b) {return a.index-b.index})
        this.appRepo.save("favourites", JSON.stringify(this.favourites));
        console.log(this.favourites);
        let toast = this.toastCtrl.create({
          message: "Added to Favourites",
          duration: 2000,
          position: "bottom",
          cssClass: "toast"
        });
        toast.present();
      }
    } else {
      let arr = [];
      arr.push(this.spell);
      this.appRepo.save("favourites", JSON.stringify(arr));
      console.log("First favourite")
      let toast = this.toastCtrl.create({
        message: "Added to Favourites",
        duration: 2000,
        position: "bottom",
        cssClass: "toast"
      });
      toast.present();
    };
  }
}
