import { Component, OnInit } from '@angular/core';
import { PlanetaListagem } from './models/planets.model';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  planetas: PlanetaListagem = new PlanetaListagem();
  
  constructor(private http: HTTP) { }

  ngOnInit() {
    this.consultaPlanetas();
  }

  consultaPlanetas() {
    let url: string = "https://swapi.co/api/planets/";
    this.http.get(url, {}, {})
      .then(data => { 
        this.planetas = JSON.parse(data.data);
      }) 
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
      });
  }

}
