import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

//services
import {
  AlertService,
  AuthService,
  EmailValidator
 } from '../../providers/providers';





/*
  Generated class for the Page1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
@IonicPage()
export class Page1 {

  marca: string = 'Box4Fun'
  loginForm: any;
  user: any = {};


  constructor(
    public navCtrl: NavController,
    private _auth: AuthService,
    private alert: AlertService,
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(16), Validators.required])]
    });
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

  // nav pages
  goToHome() {
    this.navCtrl.push("Home");
  }

  goToForgetPassword() {
    this.navCtrl.push("ForgetPassword");
  }

  goToRegistration(): void {
    this.navCtrl.push("Registration");
  }

  // logins
  signInWithFacebook(): void {
    this._auth.signInWithFacebook()
      .then((result) => {
        let user = JSON.stringify(this._auth.userFace());
        this.alert.presentAlert('teste', user);
      })
      .then( () => this.goToHome())
      .catch(error => this.alert.presentAlert('Box4Fun', 'Erro inesperado, tente novamente.'));
  }

  // signInWithGoogle(): void {
  //   this._auth.signInWithGoogle()
  //     .then(() =>  this.goToHome());
  // }

  // signInWithTwitter(): void {
  //   this._auth.signInWithTwitter()
  //     .then(() => this.goToHome());
  // }

  signIn() {

    if(this.loginForm.valid){
      this._auth.signIn(this.user)
      .then(result => this.goToHome())
      .catch((error) => {
        if (error.message === 'There is no user record corresponding to this identifier. The user may have been deleted.') {
          return this.alert.presentAlert(this.marca, 'Usuário não cadastrado.')
        }
       return  this.alert.presentAlert(this.marca, 'Senha inválida.');
      });
    } else {
      return  this.alert.presentAlert(this.marca, 'E-mail ou senha preenchido de forma incorreta.');
    }

  }




}
