import { Injectable, Output, EventEmitter } from '@angular/core';
/* import { EventEmitter } from 'stream'; */

@Injectable({
  providedIn: 'root'
})
export class ServicioDeFavoritosService {
@Output() disparadordeFavoritos : EventEmitter<any> = new EventEmitter()
  constructor(

  ) { }
}
