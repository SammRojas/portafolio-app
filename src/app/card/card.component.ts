import { Component, OnInit, Input } from '@angular/core';
/* import { ServicioDeFavoritosService } from '../servicio-de-favoritos.service'; */
import { RestService } from '../rest.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() dataEntrante:any
  image: string=''
  constructor(
    /* private _servicioFavoritos : ServicioDeFavoritosService */
    private _servicioFavoritosRest : RestService
  ) {}

  ngOnInit(): void {
    this.image = 'https://picsum.photos/536/354';
    /* console.log('llamando componente',this.dataEntrante); */
  }
  addFavorite():void{
    console.log(this.dataEntrante);
    this._servicioFavoritosRest.get(
      
    ).emit({
      data:this.dataEntrante
    })
    
  }
}
