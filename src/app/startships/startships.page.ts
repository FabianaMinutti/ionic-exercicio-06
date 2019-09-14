import { Component, OnInit } from '@angular/core';
import { NaveListagem } from './models/startships.model';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-startships',
  templateUrl: './startships.page.html',
  styleUrls: ['./startships.page.scss'],
})
export class StartshipsPage implements OnInit {
  naves: NaveListagem = new NaveListagem();

  constructor(private http: HTTP) { }

  ngOnInit() {
    this.consultaNaves();
  }

  consultaNaves() {
    let url: string = "https://swapi.co/api/starships/";
    this.http.get(url, {}, {})
      .then(data => { 
        this.naves = JSON.parse(data.data);
      }) 
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
      });
  }
}
