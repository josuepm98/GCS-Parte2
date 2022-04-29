/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
// Practica 1-2(Parte1)
// import { Router } from '@angular/router';
// import { ToastController } from '@ionic/angular';
// import { AlertController } from '@ionic/angular';


import { CardService } from './../card.service';
import { CardDeck } from '../card/shared/card.model';
import { HttpClientModule } from '@angular/common/http';

// import { Plugins } from '@capacitor/core';

// const { App } = Plugins;



@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
})

export class CardDecksPage /*implements OnInit*/ {

  public cardDecks: CardDeck []=[];

  private readonly ALLOWED_DECKS = ['classes', 'factions', 'qualities', 'types', 'races'];

  constructor(private cardSrv: CardService){
    this.getCardDecks();
  }

  private extractAllowedDecks(cardDecks: CardDeck[]) {
    this.ALLOWED_DECKS.forEach((deckName: string) => this.cardDecks.push({name: deckName, types: cardDecks[deckName]})
    );
  }

  private getCardDecks(){
    this.cardSrv.getAllCardDecks().subscribe(
      (cdSrv: CardDeck[]) => {
        this.extractAllowedDecks(cdSrv);
      }
    );
  }


  //Practica1
  //readonly cardDecks: string [] = ['Druid', 'Mage', 'Warrior', 'Rogue', 'Shaman'];

  //Practica2-Parte1
  // readonly mockupFile: string = './assets/data/carddecks.json';

  // cardDecks: CardDeck [];

  // selectedCDs: string[]=[];

  // constructor(private router: Router, public toastController: ToastController, public alertController: AlertController) {}

  // public getData(){
  //   fetch(this.mockupFile).then(res => res.json())
  //   .then(json => {
  //     this.cardDecks = json;
  //     console.log(this.cardDecks);
  //   });
  // }

  // select(card: string) {
  //   const esta = this.selectedCDs.indexOf(card);
  //   if(esta === -1){
  //     this.selectedCDs.push(card);
  //   } else {
  //     this.selectedCDs.splice(esta, 1);
  //   }
  // }

  // async presentToast() {
  //   const toast = await this.toastController.create({
  //     message: 'Bienvenido a HeartStone',
  //     position: 'top',
  //     duration: 2000
  //   });
  //   toast.present();
  // }

  // async presentAlertConfirm() {
  //   const alert = await this.alertController.create({
  //     header: 'Saliendo de HearthStone',
  //     message: '¿Estas seguro de que quieres salir?',
  //     buttons: [
  //       {
  //         text: 'Cancelar',
  //         role: 'cancel',
  //         cssClass: 'secondary'
  //       }, {
  //         text: 'Salir',
  //         handler: () => {
  //           // App.exitApp();
  //           // Al no funcionar lo anterior, navego al tab3 para ver que llegamos a esta línea
  //           this.router.navigate(['/tabs/tab3']);
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }

  // ngOnInit() {
  //   this.getData();
  //   this.presentToast();
  // }

}
