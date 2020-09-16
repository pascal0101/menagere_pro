import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Demande } from 'app/model_classe/Demande';
import { CompteUtilisateurService } from '../compteUtilisateur/compte-utilisateur.service';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(
    private compteUtilisateur: CompteUtilisateurService,
    private http: HttpClient,
    private router: Router
  ) { }

  demandeEnCours() {
    var data = {
      filter: {
        terminer: false,
        state: true
      }
    };

    if(this.compteUtilisateur.estClient()) {
      data.filter['client__id'] = this.compteUtilisateur.client.id;
    }

    var param = {
      data: JSON.stringify(data),
      is_json: '0'
    };

    return new Promise((resolve, reject) => {
      this.http.get<{data: Demande[]}>(`${window.localStorage.getItem('url')}Demande`, {params: param}).subscribe(
        function (response) {
          resolve(response.data);
        },
        (error) => {
          console.log('error', error);
          resolve([]);
        },
        () => {
          console.log('Complete :>');
        }
      );
    });

  }

  ajout(demande: any) {
    return new Promise((resolve, reject) => {
      this.http.post<{}>(`${window.localStorage.getItem('url')}Demande`, demande).subscribe(
        (response) => {
          console.log('response: ', response);
          resolve(false);
        },
        (error) => {
          console.log('error', error);
          resolve(true);
        },
        () => {
          console.log('Complete :>');
        }

      );
    });
  }

}