import { async, TestBed } from '@angular/core/testing';
import { ErrorHandler } from '@angular/core';
import { IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';



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
    new Test().esperaUmSegundo();
    expect(component.rootPage).toBe('Survey');

  });


})

function Timeout( milliseconds: number = 0 ) {
  return function( target, key, descriptor ) {
    console.log('target');
    console.log(target);
    console.log('key');
    console.log(key);
    console.log('descriptor');
    console.log(descriptor);
    var originalMethod = descriptor.value;
    descriptor.value = function (...args) {
      setTimeout(() => {
        originalMethod.apply(this, args);
       }, milliseconds);
    };
    return descriptor;
  }
}



class Test {

  public static beforeEach(components: Array<any>): void {

    TestBed.configureTestingModule({
      declarations: [
        ...components,
      ]
    })
  }

    @Timeout(1000)
    esperaUmSegundo(): void {
        console.log("Imprime no console após um segundo");
    }
}
