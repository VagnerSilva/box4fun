import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';



// services
import {
  AuthService,
  AlertService,
  EmailValidator
} from '../../providers/providers';

/*
  Generated class for the ForgetPassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html'
})
@IonicPage()
export class ForgetPassword {

  marca: string = 'Box4Fun';
  resetPass: any;
  email: string = '';

  constructor(
    public navCtrl: NavController,
    private auth: AuthService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
    this.resetPass = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPasswordPage');
  }

  resetPassword() {
    if (this.resetPass.valid) {
      this.auth.resetPass(this.email)
        .then(result => {
          this.alert.presentAlert(this.marca, 'Um e-mail foi enviado, para o endereço especificado, com instruções para o reset de senha.');
          this.navCtrl.push("Page1");
        })
        .catch(error => this.alert.presentAlert(this.marca, 'E-mail invalido! Usuário não cadastrado.'));
    }
  }
}
