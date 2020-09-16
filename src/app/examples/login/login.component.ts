import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CompteUtilisateurService } from 'app/Model/compteUtilisateur/compte-utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: boolean;
  test : Date = new Date();
  focus;
  focus1;
  constructor(
    private compteUtilisateur: CompteUtilisateurService,
    private router: Router
  ) {
    this.error = false;
  }

  ngOnInit(): void {
    if(this.compteUtilisateur.estConnecter()) {
      var link = ['home'];
      this.router.navigate(link);
    }
  }

  connexion (formulaire: NgForm) {
    // let link = ['cv'];
    let self = this;
    
    this.compteUtilisateur.connexion(formulaire.value).then(
      (reponse) => {
        if(reponse) {
          this.error = true;
        } else {
          var link = ['home'];
          this.error = false;
          this.router.navigate(link);
        }
      }
    );
    // this.router.navigate(link);
  }

}
