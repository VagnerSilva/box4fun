
import { DataSerivce } from '../../providers/providers'




export class User {

  private storage = new DataSerivce();

  constructor() { }

/**
 *
 */
  get email(): any {
    return this.storage.read('user').then(user => {
      return user.email;
    })

  }

  set email(email: any) {
    let e = {'email': email}
    this.storage.save('user', e);
   // this.user.email = email;
  }

  saveProfile(user): void {
    this.storage.save('user', user);
  }

  clean(k): void {
    this.storage.remove(k);
  }



}
