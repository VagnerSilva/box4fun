import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { Facebook } from "@ionic-native/facebook";
import { IonicStorageModule }  from '@ionic/storage';
import { Network } from '@ionic-native/network';



import { MyApp } from './app.component';


// services
import {
  AuthService,
  EmailValidator,
  NameValidator,
  AlertService,
  StorageSerivce,
  ResponserService,
  NetworkService

} from '../providers/providers';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = {
  apiKey: "AIzaSyAuDjJQvBux2SqzMgef5YlxSZA3Ui_WT8o",
  authDomain: "mandala-7cd75.firebaseapp.com",
  databaseURL: "https://mandala-7cd75.firebaseio.com",
  storageBucket: "mandala-7cd75.appspot.com",
  messagingSenderId: "320414562021"
};


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    IonicStorageModule.forRoot({
      name: '_mandala',
      storeName: '_box4fun',
      driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    EmailValidator,
    NameValidator,
    AlertService,
    Facebook,
    StorageSerivce,
    ResponserService,
    NetworkService,
    Network
  ]
})
export class AppModule { }
