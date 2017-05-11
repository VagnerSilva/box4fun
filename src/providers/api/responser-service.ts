import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

/*
  Generated class for the HttpService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ResponserService {

  constructor(private http: Http) {
  }


  get(url: string): Observable<any> {
    return this.http.get(url)
      .map(this.data)
      .catch(this.handleError);
  }

/**
 * @param url - string
 * @param data - object
 * @param headers - optional object
 */
  post(url: string, data: any, headers?: any) {
    headers ? headers : headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });
    this.http.post(url,data, options)
              .map(this.mapRes)
              .do(this.data)
              .catch(this.handleError);
  }


  private mapRes(res: Response) {
    return res;
  }

  private data(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    //TODO
    // verifica melhor maneira de lidar com error.
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return errMsg
  }


}
