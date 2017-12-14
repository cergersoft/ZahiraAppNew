import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { EmailComposer } from '@ionic-native/email-composer';


@IonicPage()
@Component({
  selector: 'page-comentario',
  templateUrl: 'comentario.html',
})
export class ComentarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer, public toastCtrl: ToastController) {
  }

  form = {
    name: "",
    cel: "",
    mail: "",
    subject: "",
    description: ""
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComentarioPage');
  }

  logForm() {
    console.log('valores de formulario:', this.form);

    let body = this.form.description + '<br><br>' +
    'Nombre: '+ this.form.name + '<br>' +
    'Celular: ' + this.form.cel + '<br>' +
    'Email: ' + this.form.mail + '<br><br><br>'+
    '<p> Cergersoft &copy; Company 2017';

    let email = {
      to: 'zahirainfo@cergersoft.com',
      subject: this.form.subject,
      body: body,
      isHtml: true
    };
    // Send a text message using default options
    this.emailComposer.open(email); 

    if(this.emailComposer.open(email)){
      let toast = this.toastCtrl.create({
        message: 'Email enviado correctamente',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
    } else {
      let toast = this.toastCtrl.create({
        message: 'Error al enviar el E-mail',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
    }
  }

}
