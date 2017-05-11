import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Survey } from './survey';

@NgModule({
  declarations: [
    Survey,
  ],
  imports: [
    IonicPageModule.forChild(Survey),
  ],
  exports: [
    Survey
  ]
})
export class SurveyModule {}
