import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portafolio-app';
  listadeVideos : any=[]
  constructor(
    private _restService : RestService
  ){}
  /* ngOnInit(): void {
      this.listadeVideos = [
        {
          tittle : 'video 1',
          subtittle : 'The subtittle video1',
          image: 'https://picsum.photos/536/354'
        },
        {
          tittle : 'video 2',
          subtitle : 'The subtittle video2',
          image: 'https://picsum.photos/536/355'
        },
        {
          tittle : 'video 3',
          subtitle : 'The subtittle video3',
          image: 'https://picsum.photos/536/356'
        }
      ]
  }
 */
  ngOnInit(): void {
    this.loadData()
  }
  loadData():void {
    this._restService.get('https://reqres.in/api/users?page=2')
    .subscribe(response =>{      
      this.listadeVideos = response
      console.log('----->',this.listadeVideos);
      
    })
  }
}
