import { Injectable } from '@angular/core';

import { AlertController } from 'ionic-angular'

/*
  Generated class for the AlertService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AlertService {

  constructor(public alertCtrl: AlertController) { }

  // alerts
  presentAlert(title: string, msg: any) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['Ok'],
      mode: 'md'
    });
    alert.present();
  }


}
