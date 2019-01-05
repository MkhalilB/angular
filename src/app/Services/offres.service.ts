import { Injectable } from '@angular/core';
import { Offre } from './offre_model';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffresService {
offres: Offre[] = [];
  offresSubject = new Subject<Offre[]>();

  constructor() { }

  emitOffres() {
    this.offresSubject.next(this.offres);
  }

  saveOffres() {
    firebase.database().ref('/offres').set(this.offres);
  }

  getOffers() {
    firebase.database().ref('/offres')
      .on('value', (data) => {
        this.offres = data.val() ? data.val() : [];
        this.emitOffres();
      });
  }

  getSingleOffre(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/offres/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewOffre(newOffre: Offre) {
    this.offres.push(newOffre);
    this.saveOffres();
    this.emitOffres();
  }

  removeOffer(offre: Offre) {
    const offreIndexToRemove = this.offres.findIndex(
      (offreEL) => {
        if (offreEL == offre) {
          return true;
        }
      }
    );

    this.offres.splice(offreIndexToRemove, 1);
    this.saveOffres();
    this.emitOffres();
  }
   
}
