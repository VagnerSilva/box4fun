
import { StorageSerivce } from '../../providers/providers'

export class User {



  constructor(private storage: StorageSerivce ) { }

/**
 * Add email
 */
  get email(): any {
    return this.storage.read('user').then(user => {
      return user.email;
    })

  }

  set email(email: any) {
    let e = {'email': email}
    this.storage.save('user', e);
  }

/**
 *
 * @param user
 * @return void
 */
  saveProfile(user): void {
    this.storage.save('user', user);
  }

/**
 *
 * @param k  key
 * @return void
 */
  delete(k): void {
    this.storage.remove(k);
  }

}
