import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ComentarioPage } from '../comentario/comentario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
}

  Comentario(){
    this.navCtrl.push(ComentarioPage);
  }

}
