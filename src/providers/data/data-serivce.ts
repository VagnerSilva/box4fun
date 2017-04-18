import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'



/*
  Generated class for the DataSerivce provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataSerivce {

  private storage = new Storage();

  constructor() { }

  /**
   *
   * @param k  key
   * @param v  value
   * @return Promise<any>
   */
  save(k: string, v: any): void {
    this.storage.set(k, v);
  }

  /**
   *
   * @param k Key
   * @return Promise<any>
   */
  remove(k: string): void {
    this.storage.remove(k);
  }

  /**

   * @param k Key
   * @return Promise<any>
   */
  read(k: string): Promise<any> {
    return this.storage.get(k).then(v =>  v);
  }

}
