import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

// import { Plugins } from '@capacitor/core';

// const { App } = Plugins;



@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
})
export class CardDecksPage implements OnInit {

  readonly cardDecks: string [] = ['Druid',
    'Mage', 'Warrior', 'Rogue', 'Shaman'];

    constructor(private router: Router, public toastController: ToastController, public alertController: AlertController) {}

    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Bienvenido a HeartStone',
        position: 'top',
        duration: 2000
      });
      toast.present();
    }

    async presentAlertConfirm() {
      const alert = await this.alertController.create({
        header: 'Saliendo de HearthStone',
        message: '¿Estas seguro de que quieres salir?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary'
          }, {
            text: 'Salir',
            handler: () => {
              // App.exitApp();
              // Al no funcionar lo anterior, navego al tab3
              this.router.navigate(['/tabs/tab3']);
            }
          }
        ]
      });

      await alert.present();
    }

    ngOnInit() {
      this.presentToast();
    }

}
