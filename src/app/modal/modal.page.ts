import { Component, OnInit, Input, NgModule } from '@angular/core';
import { NavParams, NavController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;
  
  constructor(navParams:NavParams) {
    console.log(navParams.get("firstName"));
  }

  ngOnInit() {
  }

}
