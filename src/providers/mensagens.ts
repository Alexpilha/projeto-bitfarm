import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class MensagensProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MensagensProvider Provider');
  }

}
