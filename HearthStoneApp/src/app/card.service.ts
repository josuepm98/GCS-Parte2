/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CardDeck } from './card/shared/card.model';

@Injectable({
  providedIn: 'root'
})

export class CardService {
  private readonly HS_API_URL = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info';
  private readonly API_KEY='3b2bd74510msh5e2a5267b0d0ff5p192ea8jsn2ed7ac34731f';

  private headers: HttpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': this.API_KEY
  });

  constructor(private http: HttpClient) { }

  public getAllCardDecks(): Observable<CardDeck[]>{
    return this.http.get<CardDeck[]>(
      this.HS_API_URL, { headers: this.headers}
    );
  }
}
