import { Component, OnInit } from '@angular/core';
import { ServicioDeFavoritosService } from '../servicio-de-favoritos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private _servicioFavoritos: ServicioDeFavoritosService) {}

  public listadeVideos: Array<any> = [];
  ngOnInit(): void {
    this._servicioFavoritos.disparadordeFavoritos.subscribe((data) => {
      console.log('recibiendo data---->', data);
      this.listadeVideos.push(data);
    });
  }
}
