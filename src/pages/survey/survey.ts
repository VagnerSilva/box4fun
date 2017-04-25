import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';


// pages
import { HomePage } from '../pages';


// class
import { User } from '../profile/profile'


// services
import {
  NameValidator,
  DataSerivce
} from '../../providers/providers';
/*


/*
 Generated class for the Survey page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
*/
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html'
})
export class SurveyPage {

  public user = new User();
  private profile: any = {}
  private surveyForm: any;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {

    this.surveyForm = formBuilder.group({
      name: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(16), NameValidator.isValid])],
      ageGroup: ['', Validators.compose([Validators.required])],
      genre: ['', Validators.compose([Validators.required])],
      relationship: ['', Validators.compose([Validators.required])],
      orientation: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    //  console.log('ionViewDidLoad SurveyPage');


    // let profile:any  =  {
    //   name: 'Silva',
    //   email: 'vagner23silva'
    // }

    // this.user.email = 'vanger';
    // setTimeout(() => {
    //   this.user.email.then((e) => {
    //     console.log('email')
    //     this.user.saveProfile(profile);
    //     console.log(e);
    //   })
    // }, 700)



    setTimeout(() => {
      this.user.email.then((e) => {

        console.log('1000');
      })
    }, 1000)

    setTimeout(() => {
      this.user.email.then((e) => {
        console.log('userBefor')
        console.log(e);

        console.log('userAfter');
        let u = new DataSerivce();
        u.read('user').then((e) => {

          console.log(e);
        })
      })
    }, 700)


  }

  goToHome() {
    this.profile = {};
    this.navCtrl.push(HomePage);
  }

}
