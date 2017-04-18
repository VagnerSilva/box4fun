import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { SurveyPage } from '../pages';

// services
import {
  EmailValidator,
  AlertService,
  AuthService
} from '../../providers/providers';
/*
  Generated class for the Registration page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  marca: string = 'Box4Fun';
  user: any = {}
  registrationForm: any;
  type: string = "password";

  constructor(
    public navCtrl: NavController,
    private _auth: AuthService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
    this.registrationForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(16), Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  goToSurvey() {
    this.navCtrl.push(SurveyPage);
  }

  signUp() {
    if (this.registrationForm.valid) {
      this._auth.signUp(this.user)
        .then(result => this.goToSurvey())
        .catch(error => this.alert.presentAlert(this.marca, error));
    }

  }

  // mostrar senha
  showPass() {
    if (this.type === "password") {
      this.type = "text";
    }
    else {
      this.type = "password";
    }
  }

}
