import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';








// class
import { User } from '../profile/profile'


// services
import {
  NameValidator,
  ResponserService,
  NetworkService
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

@IonicPage()
export class Survey {

  private data: any = {};
  private profile: any = {}
  private surveyForm: any;
  private ages: string[];
  private genres: string[];
  private relationships: any[];
  private orientations: any[];
  private _url = "../assets/data/survey.json";

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private _http: ResponserService,
    private netWork: NetworkService
  ) {

    this.surveyForm = formBuilder.group({
      name: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(16), NameValidator.isValid])],
      ageGroup: ['', Validators.compose([Validators.required])],
      genre: ['', Validators.compose([Validators.required])],
      relationship: ['', Validators.compose([Validators.required])],
      orientation: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    this.getResult();
    this.netWork.verityConnection();
  }

  goToHome() {
    this.profile = {};
    this.navCtrl.push("Home");
  }

  getResult() {
    return this._http.get(this._url).subscribe(
      data => {
        this.data = data;
        this.ages = data.ageGroup
        this.genres = data.genre
        this.selectGenre(false);
        this.orientations = data.orientation;

      },
      error => error // TODO
    )
  }

  selectGenre(genre) {
    genre == 'Feminino' ?
      this.relationships = this.data.woman :
      this.relationships = this.data.man;
  }


}
