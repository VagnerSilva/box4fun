import { async, TestBed } from '@angular/core/testing';
import { ErrorHandler } from '@angular/core';
import { IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { Page1 } from '../pages/pages'



describe('App Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp)
      ],
      providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  })

  it('Should be created', () => {
    expect(component instanceof MyApp).toBe(true);
    console.log(component)
  })

  it('should be login page', () => {
    console.log(component);
    expect(component.rootPage).toBe('Survey');

  });


})

class Test {

  public static beforeEach(components: Array<any>): void {

    TestBed.configureTestingModule({
      declarations: [
        ...components,
      ]
    })

  }
}
