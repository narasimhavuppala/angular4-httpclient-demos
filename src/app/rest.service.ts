import { Observable } from 'rxjs/Rx';
import { error } from 'util';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestService {
  public data: any;
  constructor(private _httpClient: HttpClient) { }

  getData(): Observable<Object> {

    return this._httpClient.get('https://api.github.com/users/narasimhavuppala');
  }

  postData() {
     this._httpClient.post('url', {}, { headers: new HttpHeaders().set('key', 'value')}
  );
   
  }

}
