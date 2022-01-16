import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private url : string = ''
  constructor(private _http: HttpClient) {}
  public get(url:string){
    return this._http.get(url)//esto hara un GET a la API
  }
}
