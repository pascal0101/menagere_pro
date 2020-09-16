import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Administrateur } from 'app/model_classe/Administrateur';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {
  administrateurs: Administrateur[]
  constructor(
    private http: HttpClient
  ) { }

  liste() {
    var data = {
      filter: {
        'typeutilisateur__id': 3
      }
    };

    var param = {
      data: JSON.stringify(data),
      is_json: '0'
    };

    this.http.get(`${window.localStorage.getItem('url')}Utilisateur`, {params: param}).subscribe(
      function (response) {
        console.log(' :::::::::::::::::::::::::::::::::::::::response:::::::::::::::::::::::::::::::::::::::: ');
        console.log('response', response);
        console.log(' :::::::::::::::::::::::::::::::::::::::response:::::::::::::::::::::::::::::::::::::::: ');
      },
      (error) => {
        console.log('error', error);
      },
      () => {
        console.log('Complete :>');
      }
    );
  }

  ajout() {

  }
}
