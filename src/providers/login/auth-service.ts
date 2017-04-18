import { Injectable } from '@angular/core';


// firebase
import {
  AuthProviders,
  AngularFireAuth,
  FirebaseAuthState,
  AuthMethods
} from 'angularfire2';

import { Facebook } from '@ionic-native/facebook';

import { AlertService } from '../alert-service';

import firebase from 'firebase';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  private authState: FirebaseAuthState

  constructor(
    public auth$: AngularFireAuth,
    public alert: AlertService,
    private fb: Facebook
  ) {
    // login
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }


  get authenticated(): boolean {
    return this.authState !== null;
  }

  signInWithFacebook(): firebase.Promise<FirebaseAuthState> {

    let permissions = new Array();
    permissions = ['email', 'public_profile'];

    return this.fb.login(permissions)
      .then(res => {

        const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(res.authResponse.accessToken);
        let providerConfig = new Object();
        providerConfig = {
          provider: AuthProviders.Facebook,
          method: AuthMethods.OAuthToken,
          remember: 'default',
          scope: permissions
        };
        return this.auth$.login(facebookCredential, providerConfig);
      })
  }

  // signInWithGoogle(): firebase.Promise<any> {
  //   return GooglePlus.login({
  //     'webClientId': '320414562021-iuor3tjg01ke3b4u2g3rhv28t1tjffs0.apps.googleusercontent.com',
  //     'offline': true
  //   }).then(res => {
  //     firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
  //       .then(success => {
  //         console.log("Firebase success: " + JSON.stringify(success));
  //       })
  //       .catch(error => console.log("Firebase failure: " + JSON.stringify(error)));
  //   }).catch(err => console.error("Error: ", err));
  // }

  // signInWithTwitter(): firebase.Promise<any> {
  //   return TwitterConnect.login();
  // }

  // registration
  signUp(user: any): firebase.Promise<any> {
    return this.auth$.createUser(user);
  }

  // signin
  // Email and password
  signIn(user: any): firebase.Promise<any> {
    return this.auth$.login(user, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    })
  }


  // >>>>>>>>>>>>>>>>

  // reset password
  resetPass(email: string) {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  userFace(): any {

    const fb = this.authState.facebook;
    let userFace = {
      displayName: fb.displayName,
      email: fb.email,
      photoURL: fb.photoURL,
      uid: fb.uid,
      providerId: fb.providerId
    }
    return userFace;
  }

}
