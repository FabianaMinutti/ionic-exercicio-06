import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { PessoaListagem } from './models/people.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  pessoas: PessoaListagem = new PessoaListagem();
  
  constructor(private http: HTTP) { }

  ngOnInit() {
    this.consultaFilmes();
  }

  consultaFilmes() {
    let url: string = "https://swapi.co/api/people/";
    this.http.get(url, {}, {})
      .then(data => { 
        this.pessoas = JSON.parse(data.data);
      }) 
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
      });
  }

}
