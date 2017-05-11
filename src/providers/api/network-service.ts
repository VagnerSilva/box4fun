import { Injectable } from '@angular/core';

import { ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network'


/*
  Generated class for the Network provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NetworkService {


  constructor(private network: Network, private toast: ToastController) {
  }

  verityConnection() {

    this.network.onConnect().subscribe(
      con => this.statusNetwork(con.type)
    )

    this.network.onDisconnect().subscribe(
      des => this.statusNetwork(des.type)
    )
  }

  statusNetwork(connectionStatus: string) {
    // TODO
    // Definir linguagem padrão
    // definir se havera notificação para status online
    connectionStatus == 'online' ? undefined :
    this.toast.create({
      message: `Você está ${connectionStatus}. Verifique sua conexão.`,
      duration: 4000
    }).present()
  }

}
