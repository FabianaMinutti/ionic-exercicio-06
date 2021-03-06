import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { FilmsList } from './models/films.model';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
  entryComponents:[ ModalPage ]
})
export class FilmsPage implements OnInit {

  filmes: FilmsList = new FilmsList();

  constructor(private http: HTTP, public modalController: ModalController) { }

  ngOnInit() {
    this.consultaFilmes();
  }

  consultaFilmes() {
    let url: string = "https://swapi.co/api/films/";
    this.http.get(url, {}, {})
      .then(data => {
        this.filmes = JSON.parse(data.data);
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
      });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        firstName: 'Douglas',
        lastName: 'Adams',
        middleInitial: 'N'
      }
    });
    return await modal.present();
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true,      
    });
  }
}
