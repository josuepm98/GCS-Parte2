import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { CardDeck } from './../models/card-deck';

// import { Plugins } from '@capacitor/core';

// const { App } = Plugins;



@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
})
export class CardDecksPage implements OnInit {


  //Practica1
  //readonly cardDecks: string [] = ['Druid', 'Mage', 'Warrior', 'Rogue', 'Shaman'];

  readonly mockupFile: string = './assets/data/carddecks.json';

  cardDecks: CardDeck [];

  selectedCDs: string[]=[];

  constructor(private router: Router, public toastController: ToastController, public alertController: AlertController) {}

  public getData(){
    fetch(this.mockupFile).then(res => res.json())
    .then(json => {
      this.cardDecks = json;
    });
  }

  select(name: string) {
    const esta = this.selectedCDs.indexOf(name);
    if(esta === -1){
      this.selectedCDs.push(name);
    } else {
      this.selectedCDs.splice(esta, 1);
    }
  }

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
    this.getData();
    this.presentToast();
  }

}
