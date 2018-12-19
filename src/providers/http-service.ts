import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { LoadingController } from '../../node_modules/ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()

export class HttpService {

  constructor(private http: Http,
    private loadingCtrl: LoadingController) {}

  private baseURL: string = "http://dnd5eapi.co/api/"

  request(endpoint, onComplete) {
    let loading = this.loadingCtrl.create();
    loading.present();

    this.http.get(this.baseURL+endpoint)
    .subscribe(
      data => {
          let response = data.json();
          console.log(response);
          onComplete(response);
          loading.dismiss();
    });
  }
}
