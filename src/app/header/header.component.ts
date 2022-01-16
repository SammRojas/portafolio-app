import { Component, OnInit } from '@angular/core';
import { ServicioDeFavoritosService } from '../servicio-de-favoritos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _servicioFavorito : ServicioDeFavoritosService
  ) { }

  ngOnInit(): void {
    this._servicioFavorito.disparadordeFavoritos.subscribe()
  }

}
