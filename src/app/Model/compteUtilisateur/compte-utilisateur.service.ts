import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from 'app/model_classe/Utilisateur';
import { Router } from '@angular/router';
import { Menagere } from 'app/model_classe/Menagere';
import { Client } from 'app/model_classe/Client';
import { Administrateur } from 'app/model_classe/Administrateur';

@Injectable({
  providedIn: 'root'
})
export class CompteUtilisateurService {
  isClient: boolean;
  isMenagere: boolean;
  isAdministrateur: boolean;

  client: Client;
  menagere: Menagere;
  administrateur: Administrateur;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.isClient = false;
    this.isMenagere = false;
    this.isAdministrateur = false;

    this.setUser();
  }

  enregistrerDesInfo(response) {
    window.localStorage.setItem('token', response.token);
    window.localStorage.setItem('user', JSON.stringify(response.utilisateur));
    this.setUser();
  }

  infoUtilisateur() {
    if(window.localStorage.getItem('user') == null || window.localStorage.getItem('user') == undefined)
      return;

    if(!window.localStorage.getItem('user').trim())
      return;

    var user = JSON.parse(window.localStorage.getItem('user'));
    var role = '';

    if (user.typeutilisateur == 1) {
      role = 'Administrateur';
    }

    if (user.typeutilisateur == 2) {
      role = 'Ménagère';
    }

    if (user.typeutilisateur == 3) {
      role = 'Client';
    }

    return user.nom + ' ' + user.prenom + ' (' + role + ')';
  }

  setUser() {
    // this.deconnecter();

    if(window.localStorage.getItem('user') == null || window.localStorage.getItem('user') == undefined)
      return;

    if(!window.localStorage.getItem('user').trim())
      return;

    console.log(' ------ ', window.localStorage.getItem('user'));

    var user = JSON.parse(window.localStorage.getItem('user'));
    if (user.typeutilisateur == 1) {
      this.setAdministrateur(user);
    }

    if (user.typeutilisateur == 2) {
      this.setMenagere(user);
    }

    if (user.typeutilisateur == 3) {
      this.setClient(user);
    }

    console.log('user: ', user);
  }

  setClient(client: Client) {
    this.isClient = true;
    this.client = client;
  }

  setMenagere(menagere: Menagere) {
    this.isMenagere = true;
    this.menagere = menagere;
  }

  setAdministrateur(administrateur: Administrateur) {
    this.isAdministrateur = true;
    this.administrateur = administrateur;
  }

  connexion(utilisateur: Utilisateur) {
    return new Promise((resolve, reject) => {
      this.http.post<{token: string, user: Utilisateur}>(`${window.localStorage.getItem('url_auth')}jwt/`, utilisateur).subscribe(
        (response) => {
          this.enregistrerDesInfo(response);

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

  signupClient(client: Client) {
    return new Promise((resolve, reject) => {
      this.http.post<{token: string, user: Utilisateur}>(`${window.localStorage.getItem('url_auth')}register/client/`, client).subscribe(
        (response) => {
          this.enregistrerDesInfo(response);
          
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

  signupMenagere(menagere: Menagere) {
    return new Promise((resolve, reject) => {
      this.http.post<{token: string, user: Utilisateur}>(`${window.localStorage.getItem('url_auth')}register/menagere/`, menagere).subscribe(
        (response) => {
          /* var response_new = {
            utilisateur: response,
            token: response.token
          };
           */
          this.enregistrerDesInfo(response);
          
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

  seDeconnecter () {
    window.localStorage.setItem('token', '');
    window.localStorage.setItem('user', '');
    var link = ['login'];
    this.router.navigate(link);
  }

  deconnecter () {
    window.localStorage.setItem('token', '');
    window.localStorage.setItem('user', '');
  }

  estConnecter() {
    var estConnecter = false;

    if(window.localStorage.getItem('token')) {
      estConnecter = true;
    }

    return estConnecter;
  }
  
  estClient() {
    return this.isClient;
  }

  estMenagere() {
    return this.isMenagere;
  }

  estAdministrateur() {
    return this.isAdministrateur;
  }

  
}
